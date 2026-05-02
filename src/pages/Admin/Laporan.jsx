import React, { useState, useEffect } from "react";

const Laporan = () => {
  const [dataTransaksi, setDataTransaksi] = useState([]);
  const [loading, setLoading] = useState(true);

  // State Angka Ringkasan
  const [totalPemasukan, setTotalPemasukan] = useState(0);
  const [totalPengeluaran, setTotalPengeluaran] = useState(0);
  const [pendapatanBersih, setPendapatanBersih] = useState(0);

  // State Form Pengeluaran (Disesuaikan dengan DB: nominal_keluar)
  const [formPengeluaran, setFormPengeluaran] = useState({
    tanggal: "",
    keterangan: "",
    nominal_keluar: "",
  });
  const [prosesSimpan, setProsesSimpan] = useState(false);

  const [tampilkanSemua, setTampilkanSemua] = useState(false);

  // --- AMBIL DATA PEMASUKAN & PENGELUARAN ---
  const fetchDataLaporan = async () => {
    let omzet = 0;
    let beban = 0;
    let arrayPemasukan = [];
    let arrayPengeluaran = [];

    try {
      // 1. Tarik Data Pemasukan
      try {
        const resPem = await fetch("http://localhost:5000/api/pembayaran");
        if (resPem.ok) {
          const dataPemasukan = await resPem.json();
          arrayPemasukan = dataPemasukan.map((item) => {
            omzet += Number(item.nominal_bayar) || 0;
            return {
              id: `in-${item.id_pembayaran}`,
              tanggal: item.tanggal_bayar,
              kategori: "Pemasukan",
              keterangan: `Pembayaran Reservasi - ${item.nama_pelanggan}`,
              nominal: Number(item.nominal_bayar) || 0,
              sortId: item.id_reservasi || item.id_pembayaran || 0,
            };
          });
        }
      } catch (err) {
        console.warn("API Pemasukan belum siap:", err);
      }

      // 2. Tarik Data Pengeluaran
      try {
        const resPeng = await fetch("http://localhost:5000/api/pengeluaran");
        if (resPeng.ok) {
          const dataPengeluaran = await resPeng.json();
          arrayPengeluaran = dataPengeluaran.map((item) => {
            beban += Number(item.nominal_keluar) || 0;
            return {
              id: `out-${item.id_pengeluaran}`,
              tanggal: item.tanggal,
              kategori: "Pengeluaran",
              keterangan: item.keterangan,
              nominal: Number(item.nominal_keluar) || 0,
              sortId: item.id_pengeluaran || 0,
            };
          });
        }
      } catch (err) {
        console.warn("API Pengeluaran belum siap:", err);
      }

      // 3. GABUNGKAN & URUTKAN (HYBRID SORTING)
      const gabungan = [...arrayPemasukan, ...arrayPengeluaran].sort((a, b) => {
        const dateA = new Date(a.tanggal);
        const dateB = new Date(b.tanggal);
        if (dateB > dateA) return 1;
        if (dateB < dateA) return -1;
        return b.sortId - a.sortId;
      });

      // 4. Masukkan ke State
      setDataTransaksi(gabungan);
      setTotalPemasukan(omzet);
      setTotalPengeluaran(beban);
      setPendapatanBersih(omzet - beban);
      setLoading(false);
    } catch (error) {
      console.error("Gagal menarik data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataLaporan();
  }, []);
  // --- FUNGSI SIMPAN PENGELUARAN BARU ---
  const handleSimpanPengeluaran = async (e) => {
    e.preventDefault();
    if (
      !formPengeluaran.tanggal ||
      !formPengeluaran.keterangan ||
      !formPengeluaran.nominal_keluar
    ) {
      alert("Lengkapi semua form pengeluaran!");
      return;
    }

    setProsesSimpan(true);
    try {
      const respons = await fetch("http://localhost:5000/api/pengeluaran", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formPengeluaran), // Mengirim "nominal_keluar" ke backend
      });

      if (respons.ok) {
        alert("Pengeluaran berhasil ditambahkan!");
        setFormPengeluaran({ tanggal: "", keterangan: "", nominal_keluar: "" });
        fetchDataLaporan();
      }
    } catch (error) {
      alert("Koneksi ke server gagal.");
    } finally {
      setProsesSimpan(false);
    }
  };

  return (
    <div className="p-12 font-body">
      <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-serif italic tracking-tight text-primary">
            Laporan Ringkasan
          </h2>
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-8 bg-secondary"></div>
            <p className="text-sm font-medium text-on-surface-variant/70">
              Performa finansial dan operasional galeri.
            </p>
          </div>
        </div>
      </header>

      {/* --- METRIC CARDS --- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Card 1: Total Pemasukan */}
        <div className="bg-surface-container-low p-8 rounded-xl shadow-sm border-l border-secondary/10 flex flex-col justify-between h-56">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-primary">
                account_balance_wallet
              </span>
            </div>
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-on-surface-variant/60">
              Revenue Stream
            </span>
          </div>
          <div>
            <h3 className="text-on-surface-variant font-medium text-sm mb-1 uppercase tracking-widest">
              Total Pemasukan
            </h3>
            <p className="text-3xl font-serif italic text-primary">
              {loading ? "..." : `Rp ${totalPemasukan.toLocaleString("id-ID")}`}
            </p>
          </div>
        </div>

        {/* Card 2: Total Pengeluaran */}
        <div className="bg-primary p-8 rounded-xl shadow-xl flex flex-col justify-between h-56 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-9xl">
              receipt_long
            </span>
          </div>
          <div className="flex justify-between items-start relative z-10">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <span className="material-symbols-outlined text-white">
                payments
              </span>
            </div>
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/50">
              Operational Costs
            </span>
          </div>
          <div className="relative z-10">
            <h3 className="text-white/70 font-medium text-sm mb-1 uppercase tracking-widest">
              Total Pengeluaran
            </h3>
            <p className="text-3xl font-serif italic text-white">
              {loading
                ? "..."
                : `Rp ${totalPengeluaran.toLocaleString("id-ID")}`}
            </p>
          </div>
        </div>

        {/* Card 3: Pendapatan Bersih */}
        <div className="bg-secondary-container p-8 rounded-xl shadow-lg border border-secondary/10 flex flex-col justify-between h-56">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-white">star</span>
            </div>
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-secondary/70">
              Net Growth
            </span>
          </div>
          <div>
            <h3 className="text-secondary font-bold text-sm mb-1 uppercase tracking-widest">
              Pendapatan Bersih
            </h3>
            <p className="text-3xl font-serif italic text-on-secondary-fixed">
              {loading
                ? "..."
                : `Rp ${pendapatanBersih.toLocaleString("id-ID")}`}
            </p>
          </div>
          <div className="h-1.5 w-full bg-secondary/10 rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-[70%]"></div>
          </div>
        </div>
      </section>

      {/* --- FORM INPUT PENGELUARAN --- */}
      <section className="mb-16">
        <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/10 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                add_circle
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-serif italic text-primary">
                Input Pengeluaran Manual
              </h3>
              <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-on-surface-variant/50 mt-1">
                Tambahkan detail biaya operasional baru ke dalam pembukuan
              </p>
            </div>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="flex flex-col gap-2 md:col-span-3">
              <label className="text-[10px] font-sans uppercase tracking-widest text-on-surface-variant/70 font-bold ml-1">
                Tanggal
              </label>
              <input
                type="date"
                required
                value={formPengeluaran.tanggal}
                onChange={(e) =>
                  setFormPengeluaran({
                    ...formPengeluaran,
                    tanggal: e.target.value,
                  })
                }
                className="bg-white/50 border border-outline-variant/40 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-5">
              <label className="text-[10px] font-sans uppercase tracking-widest text-on-surface-variant/70 font-bold ml-1">
                Keterangan
              </label>
              <input
                type="text"
                required
                placeholder="Misal: Beli Tinta Printer, Bayar Listrik..."
                value={formPengeluaran.keterangan}
                onChange={(e) =>
                  setFormPengeluaran({
                    ...formPengeluaran,
                    keterangan: e.target.value,
                  })
                }
                className="bg-white/50 border border-outline-variant/40 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] font-sans uppercase tracking-widest text-on-surface-variant/70 font-bold ml-1">
                Nominal (RP)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-on-surface-variant/40">
                  Rp
                </span>
                <input
                  type="number"
                  required
                  placeholder="0"
                  value={formPengeluaran.nominal_keluar}
                  onChange={(e) =>
                    setFormPengeluaran({
                      ...formPengeluaran,
                      nominal_keluar: e.target.value,
                    })
                  }
                  className="bg-white/50 border border-outline-variant/40 rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none w-full"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={handleSimpanPengeluaran}
                disabled={prosesSimpan}
                className="w-full bg-primary text-white font-sans uppercase tracking-widest text-[10px] font-bold py-4 px-6 rounded-lg hover:bg-primary/90 shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">save</span>
                {prosesSimpan ? "Proses..." : "Simpan"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* --- TABEL RIWAYAT TRANSAKSI GABUNGAN --- */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">
              list_alt
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-serif italic text-primary">
              Buku Besar Transaksi
            </h3>
            <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-on-surface-variant/50 mt-1">
              Laporan arus kas masuk dan keluar secara mendetail
            </p>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-xl shadow-lg overflow-hidden border border-outline-variant/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 font-sans uppercase tracking-widest text-[10px] font-bold">
                    Tanggal
                  </th>
                  <th className="px-6 py-4 font-sans uppercase tracking-widest text-[10px] font-bold">
                    Kategori
                  </th>
                  <th className="px-6 py-4 font-sans uppercase tracking-widest text-[10px] font-bold">
                    Keterangan
                  </th>
                  <th className="px-6 py-4 font-sans uppercase tracking-widest text-[10px] font-bold text-right">
                    Nominal
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {loading ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-8 text-center text-sm italic"
                    >
                      Memuat pembukuan...
                    </td>
                  </tr>
                ) : dataTransaksi.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-8 text-center text-sm italic"
                    >
                      Belum ada transaksi.
                    </td>
                  </tr>
                ) : (
                  // --- KODE PEMOTONG DATA (.slice) DITAMBAHKAN DI SINI ---
                  dataTransaksi
                    .slice(0, tampilkanSemua ? dataTransaksi.length : 5)
                    .map((row) => (
                      <tr
                        key={row.id}
                        className="bg-surface-container-low hover:bg-surface-container transition-colors"
                      >
                        <td className="px-6 py-4 text-xs font-medium text-on-surface-variant">
                          {row.tanggal
                            ? new Date(row.tanggal).toLocaleDateString(
                                "id-ID",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                },
                              )
                            : "-"}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                              row.kategori === "Pemasukan"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {row.kategori}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs font-medium">
                          {row.keterangan}
                        </td>
                        <td
                          className={`px-6 py-4 text-xs font-bold text-right ${row.kategori === "Pemasukan" ? "text-primary" : "text-error"}`}
                        >
                          {row.kategori === "Pemasukan" ? "" : "- "} Rp{" "}
                          {row.nominal.toLocaleString("id-ID")}
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>

          {/* --- FOOTER TABEL: TOMBOL LIHAT SEMUA --- */}
          {dataTransaksi.length > 5 && (
            <div className="px-6 py-4 bg-surface-container-high border-t border-outline-variant/10 flex justify-between items-center">
              <p className="text-[10px] font-sans text-on-surface-variant/60 font-medium italic">
                Menampilkan {tampilkanSemua ? dataTransaksi.length : 5} dari{" "}
                {dataTransaksi.length} transaksi
              </p>
              <button
                onClick={() => setTampilkanSemua(!tampilkanSemua)}
                className="text-secondary text-[10px] font-bold uppercase tracking-widest hover:underline"
              >
                {tampilkanSemua
                  ? "Tampilkan Lebih Sedikit"
                  : "Lihat Semua Laporan"}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Laporan;
