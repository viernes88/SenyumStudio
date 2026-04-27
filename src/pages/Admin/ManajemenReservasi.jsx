import React, { useState, useEffect } from "react";

const ManajemenReservasi = () => {
  const [reservasi, setReservasi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tampilkanSemua, setTampilkanSemua] = useState(false);

  // --- FITUR BARU: State untuk menyimpan kata kunci pencarian ---
  const [kataKunci, setKataKunci] = useState("");

  const ambilDataReservasi = () => {
    fetch("http://localhost:5000/api/reservasi")
      .then((res) => res.json())
      .then((data) => {
        setReservasi(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    ambilDataReservasi();
  }, []);

  const handleHapusReservasi = async (id, nama) => {
    const konfirmasi = window.confirm(
      `Apakah Anda yakin ingin menghapus reservasi atas nama ${nama}?`,
    );
    if (konfirmasi) {
      try {
        const respons = await fetch(
          `http://localhost:5000/api/reservasi/${id}`,
          { method: "DELETE" },
        );
        const data = await respons.json();
        if (respons.ok) {
          setReservasi(reservasi.filter((item) => item.id_reservasi !== id));
        } else {
          alert("Gagal menghapus data dari server.");
        }
      } catch (error) {
        alert("Terjadi kesalahan koneksi.");
      }
    }
  };

  const handleUbahStatus = async (id_reservasi, statusBaru, total_tagihan) => {
    try {
      const respons = await fetch(
        `http://localhost:5000/api/reservasi/${id_reservasi}/status-bayar`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            status_bayar: statusBaru,
            total_tagihan: total_tagihan,
          }),
        },
      );
      const data = await respons.json();
      if (data.sukses) {
        let uangMasukBaru = 0;
        if (statusBaru === "Lunas") uangMasukBaru = Number(total_tagihan);
        else if (statusBaru === "DP")
          uangMasukBaru = Number(total_tagihan) * 0.3;

        setReservasi((prevData) =>
          prevData.map((item) =>
            item.id_reservasi === id_reservasi
              ? {
                  ...item,
                  status_pembayaran: statusBaru,
                  nominal_bayar: uangMasukBaru,
                }
              : item,
          ),
        );
      }
    } catch (error) {
      console.error("Gagal update status.");
    }
  };

  // --- LOGIKA FILTER PENCARIAN ---
  // 1. Saring data berdasarkan nama pelanggan yang diketik
  const dataHasilPencarian = reservasi.filter((item) =>
    item.nama_pelanggan.toLowerCase().includes(kataKunci.toLowerCase()),
  );

  // 2. Terapkan batasan tampilan (3 baris atau semua) dari hasil pencarian
  const dataYangDitampilkan = tampilkanSemua
    ? dataHasilPencarian
    : dataHasilPencarian.slice(0, 3);

  // Total pendapatan dihitung dari uang masuk nyata
  const totalPendapatan = reservasi.reduce(
    (total, item) => total + Number(item.nominal_bayar || 0),
    0,
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Belum Bayar":
        return "bg-[#ffdad6] text-[#93000a] border-[#93000a]/20";
      case "DP":
        return "bg-[#fed65b] text-[#745c00] border-secondary/20";
      case "Lunas":
        return "bg-[#E8F5E9] text-[#2E7D32] border-[#2E7D32]/20";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-10 font-body">
      <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-serif italic text-4xl text-primary tracking-tight">
            Manajemen Reservasi
          </h2>
          <p className="text-on-surface-variant font-medium mt-2">
            Kelola antrean dan bersihkan jadwal yang batal.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-highest px-6 py-3 rounded-xl shadow-sm border-l-4 border-secondary">
            <p className="text-[10px] uppercase tracking-widest font-bold text-secondary mb-1">
              Total Antrean
            </p>
            <p className="text-2xl font-serif italic text-primary">
              {loading ? "..." : reservasi.length}
            </p>
          </div>
          <div className="bg-surface-container-highest px-6 py-3 rounded-xl shadow-sm border-l-4 border-primary">
            <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-1">
              Nilai Omzet
            </p>
            <p className="text-2xl font-serif italic text-primary">
              {loading
                ? "..."
                : `Rp ${totalPendapatan.toLocaleString("id-ID")}`}
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-outline-variant/20">
            {/* HEADER TABEL DENGAN FITUR PENCARIAN */}
            <div className="px-8 py-6 border-b border-surface-container flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h3 className="font-serif text-xl text-primary italic">
                Daftar Reservasi
              </h3>

              <div className="flex items-center gap-3 w-full md:w-auto">
                {/* Kolom Input Pencarian */}
                <div className="relative flex-1 md:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/40 text-sm">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Cari nama klien..."
                    value={kataKunci}
                    onChange={(e) => setKataKunci(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-surface-container-high border-none rounded-full text-xs font-medium outline-none focus:ring-1 focus:ring-secondary/50 text-primary placeholder:text-primary/40 transition-all"
                  />
                </div>

                <button
                  onClick={ambilDataReservasi}
                  className="p-2 hover:bg-surface-container rounded-full transition-all group shrink-0"
                  title="Refresh Data"
                >
                  <span className="material-symbols-outlined text-primary text-xl group-hover:rotate-180 transition-transform duration-500">
                    refresh
                  </span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container/30">
                    <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Klien
                    </th>
                    <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Paket
                    </th>
                    <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Status Bayar
                    </th>
                    <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold text-center">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {/* Tampilkan pesan jika hasil pencarian kosong */}
                  {dataYangDitampilkan.length === 0 && !loading && (
                    <tr>
                      <td
                        colSpan="4"
                        className="px-8 py-12 text-center text-on-surface-variant/50"
                      >
                        <span className="material-symbols-outlined text-4xl mb-2">
                          person_search
                        </span>
                        <p className="text-sm font-medium">
                          Klien dengan nama "{kataKunci}" tidak ditemukan.
                        </p>
                      </td>
                    </tr>
                  )}

                  {dataYangDitampilkan.map((item) => (
                    <tr
                      key={item.id_reservasi}
                      className="hover:bg-surface-container-low transition-colors group"
                    >
                      <td className="px-8 py-5">
                        <p className="font-serif italic text-on-surface font-medium text-lg">
                          {item.nama_pelanggan}
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          {item.nomor_wa}
                        </p>
                      </td>
                      <td className="px-8 py-5">
                        <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold uppercase text-primary">
                          {item.nama_paket || "Sesi Foto"}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <div className="relative inline-block text-left group/dropdown">
                          <button
                            className={`w-32 px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase flex items-center justify-between ${getStatusStyle(item.status_pembayaran || "Belum Bayar")}`}
                          >
                            {item.status_pembayaran || "Belum Bayar"}
                            <span className="material-symbols-outlined text-sm">
                              expand_more
                            </span>
                          </button>
                          <div className="absolute left-0 mt-2 w-40 bg-white border rounded-xl shadow-2xl z-50 overflow-hidden opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all">
                            <button
                              onClick={() =>
                                handleUbahStatus(
                                  item.id_reservasi,
                                  "Belum Bayar",
                                  item.subtotal,
                                )
                              }
                              className="w-full text-left px-4 py-2 text-[10px] font-bold text-error hover:bg-error/5"
                            >
                              Belum Bayar
                            </button>
                            <button
                              onClick={() =>
                                handleUbahStatus(
                                  item.id_reservasi,
                                  "DP",
                                  item.subtotal,
                                )
                              }
                              className="w-full text-left px-4 py-2 text-[10px] font-bold text-secondary hover:bg-secondary/5"
                            >
                              DP
                            </button>
                            <button
                              onClick={() =>
                                handleUbahStatus(
                                  item.id_reservasi,
                                  "Lunas",
                                  item.subtotal,
                                )
                              }
                              className="w-full text-left px-4 py-2 text-[10px] font-bold text-[#2E7D32] hover:bg-[#E8F5E9]"
                            >
                              Lunas
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-center">
                        <button
                          onClick={() =>
                            handleHapusReservasi(
                              item.id_reservasi,
                              item.nama_pelanggan,
                            )
                          }
                          className="p-2 text-on-surface-variant hover:text-error hover:bg-error/10 rounded-full transition-all"
                          title="Hapus Reservasi"
                        >
                          <span className="material-symbols-outlined text-xl">
                            delete
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tombol Tampilkan Semua (Menyesuaikan dengan hasil pencarian) */}
            {dataHasilPencarian.length > 3 && (
              <div className="px-8 py-4 bg-surface-container/10 border-t border-surface-container flex justify-center">
                <button
                  onClick={() => setTampilkanSemua(!tampilkanSemua)}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-secondary flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">
                    {tampilkanSemua ? "expand_less" : "expand_more"}
                  </span>
                  {tampilkanSemua
                    ? "Sembunyikan Daftar"
                    : `Tampilkan Semua Hasil (${dataHasilPencarian.length})`}
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManajemenReservasi;
