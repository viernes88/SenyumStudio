import React, { useState } from "react";

const ManajemenReservasi = () => {
  // 1. State Data Reservasi (Saya tambahkan 2 data ekstra agar efek tombolnya terlihat)
  const [reservasi, setReservasi] = useState([
    {
      id: "#EC-901",
      nama: "Adinda Pratiwi",
      hp: "0812-3456-7890",
      jam: "09:00",
      paket: "The Eternal Muse",
      status: "DP 30%",
    },
    {
      id: "#EC-902",
      nama: "Dimas & Sarah",
      hp: "0821-9876-5432",
      jam: "11:30",
      paket: "Lumière Duo",
      status: "Lunas",
    },
    {
      id: "#EC-903",
      nama: "Citra Kirana",
      hp: "0856-2222-3333",
      jam: "14:00",
      paket: "Minimalist Solo",
      status: "DP 30%",
    },
    {
      id: "#EC-904",
      nama: "Raka Praditya",
      hp: "0877-1111-0000",
      jam: "16:30",
      paket: "The Eternal Muse",
      status: "Lunas",
    },
    {
      id: "#EC-905",
      nama: "Keluarga Bpk Budi",
      hp: "0813-5555-6666",
      jam: "18:00",
      paket: "Legacy Family",
      status: "Belum Bayar",
    },
    {
      id: "#EC-906",
      nama: "Tiara Andini",
      hp: "0899-7777-8888",
      jam: "19:30",
      paket: "Editorial Curated",
      status: "Lunas",
    },
  ]);

  // 2. State untuk mengatur visibilitas tabel (Bawaannya: false / tidak tampil semua)
  const [tampilkanSemua, setTampilkanSemua] = useState(false);

  // 3. Menentukan data yang dirender (Tampil 3 data saja, atau tampil semua)
  const dataYangDitampilkan = tampilkanSemua
    ? reservasi
    : reservasi.slice(0, 3);

  // Fungsi untuk mengubah status saat dropdown diklik
  const handleUbahStatus = (id, statusBaru) => {
    setReservasi((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: statusBaru } : item,
      ),
    );
  };

  // Fungsi pembantu penentu warna tombol secara dinamis
  const getStatusStyle = (status) => {
    switch (status) {
      case "Belum Bayar":
        return "bg-error/10 text-error border-error/20 hover:bg-error hover:text-white";
      case "DP 30%":
        return "bg-[#fed65b] text-[#745c00] border-secondary/20 hover:bg-secondary hover:text-white";
      case "Lunas":
        return "bg-[#E8F5E9] text-[#2E7D32] border-[#2E7D32]/20 hover:bg-[#2E7D32] hover:text-white";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-10">
      {/* Header & Stats Overview */}
      <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-serif italic text-4xl text-primary tracking-tight">
            Manajemen Reservasi
          </h2>
          <p className="text-on-surface-variant font-medium mt-2">
            Kelola pesanan, verifikasi pembayaran, dan atur alur kurasi klien.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-highest px-6 py-3 rounded-xl shadow-sm border-l-4 border-secondary">
            <p className="text-[10px] uppercase tracking-widest font-bold text-secondary mb-1">
              Total Reservasi
            </p>
            <p className="text-2xl font-serif italic text-primary">
              {reservasi.length}
            </p>
          </div>
          <div className="bg-surface-container-highest px-6 py-3 rounded-xl shadow-sm border-l-4 border-primary">
            <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-1">
              Pendapatan Bulan Ini
            </p>
            <p className="text-2xl font-serif italic text-primary">Rp 42.5M</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Reservation Table Section */}
        <section className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-outline-variant/20">
            <div className="px-8 py-6 border-b border-surface-container flex justify-between items-center">
              <h3 className="font-serif text-xl text-primary italic">
                Daftar Antrean Reservasi
              </h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                  <span className="material-symbols-outlined text-primary text-xl">
                    search
                  </span>
                </button>
                <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                  <span className="material-symbols-outlined text-primary text-xl">
                    tune
                  </span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto min-h-[300px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container/30">
                    <th className="px-8 py-4 font-sans text-[11px] uppercase tracking-widest text-on-surface-variant font-bold">
                      ID
                    </th>
                    <th className="px-8 py-4 font-sans text-[11px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Nama Klien
                    </th>
                    <th className="px-8 py-4 font-sans text-[11px] uppercase tracking-widest text-on-surface-variant font-bold">
                      WhatsApp
                    </th>
                    <th className="px-8 py-4 font-sans text-[11px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Jam
                    </th>
                    <th className="px-8 py-4 font-sans text-[11px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Paket
                    </th>
                    <th className="px-8 py-4 font-sans text-[11px] uppercase tracking-widest text-on-surface-variant font-bold text-right pr-12">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {/* Mapping menggunakan 'dataYangDitampilkan' bukan langsung dari 'reservasi' */}
                  {dataYangDitampilkan.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-surface-container-low transition-colors group"
                    >
                      <td className="px-8 py-5 text-sm font-medium text-primary-container">
                        {item.id}
                      </td>
                      <td className="px-8 py-5">
                        <p className="font-serif italic text-on-surface">
                          {item.nama}
                        </p>
                      </td>
                      <td className="px-8 py-5 text-sm text-on-surface-variant">
                        {item.hp}
                      </td>
                      <td className="px-8 py-5">
                        <span className="text-sm font-bold text-primary">
                          {item.jam}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                          {item.paket}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right pr-8">
                        <div className="relative inline-block text-left status-dropdown group/dropdown">
                          {/* Tombol Status Utama */}
                          <button
                            className={`flex items-center justify-between w-28 ml-auto px-4 py-1.5 rounded-full border shadow-sm transition-all ${getStatusStyle(item.status)}`}
                          >
                            <span className="text-[10px] font-bold uppercase tracking-[0.1em]">
                              {item.status}
                            </span>
                            <span className="material-symbols-outlined text-sm">
                              expand_more
                            </span>
                          </button>

                          {/* Dropdown Pilihan Status */}
                          <div className="status-menu absolute right-0 mt-2 w-44 bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-2xl z-50 overflow-hidden opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 translate-y-[-8px] transition-all duration-200 text-left">
                            <div className="py-1">
                              <button
                                onClick={() =>
                                  handleUbahStatus(item.id, "Belum Bayar")
                                }
                                className="flex w-full items-center px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-error hover:bg-error/5 transition-colors"
                              >
                                <span className="w-2 h-2 rounded-full bg-error mr-3"></span>
                                Belum Bayar
                              </button>
                              <button
                                onClick={() =>
                                  handleUbahStatus(item.id, "DP 30%")
                                }
                                className="flex w-full items-center px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-secondary hover:bg-secondary/5 transition-colors border-y border-outline-variant/10"
                              >
                                <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                                DP 30%
                              </button>
                              <button
                                onClick={() =>
                                  handleUbahStatus(item.id, "Lunas")
                                }
                                className="flex w-full items-center px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#004e50] hover:bg-[#004e50]/5 transition-colors"
                              >
                                <span className="w-2 h-2 rounded-full bg-[#004e50] mr-3"></span>
                                Lunas
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tombol Tampilkan Semua / Tampilkan Lebih Sedikit */}
            {reservasi.length > 3 && (
              <div className="px-8 py-4 bg-surface-container/10 border-t border-surface-container flex justify-center">
                <button
                  onClick={() => setTampilkanSemua(!tampilkanSemua)}
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors"
                >
                  {tampilkanSemua
                    ? "Tampilkan Lebih Sedikit"
                    : `Tampilkan Semua (${reservasi.length})`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Small Input Panel Section */}
        <section className="col-span-12 lg:col-span-4 space-y-8">
          {/* Input Pengeluaran Panel */}
          <div className="bg-primary text-white rounded-2xl p-8 shadow-xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl">
                payments
              </span>
            </div>
            <h3 className="font-serif italic text-2xl mb-6 relative z-10">
              Input Pengeluaran
            </h3>
            <form className="space-y-5 relative z-10">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/60 mb-1 block">
                  Tanggal Transaksi
                </label>
                <input
                  className="w-full bg-white/10 border-0 border-b border-white/30 text-white text-sm focus:ring-0 focus:border-secondary transition-colors px-0 py-2 placeholder-white/30 outline-none"
                  type="date"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/60 mb-1 block">
                  Keterangan
                </label>
                <input
                  className="w-full bg-white/10 border-0 border-b border-white/30 text-white text-sm focus:ring-0 focus:border-secondary transition-colors px-0 py-2 placeholder-white/30 outline-none"
                  placeholder="Misal: Perawatan Studio"
                  type="text"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/60 mb-1 block">
                  Nominal (IDR)
                </label>
                <input
                  className="w-full bg-white/10 border-0 border-b border-white/30 text-white text-sm focus:ring-0 focus:border-secondary transition-colors px-0 py-2 placeholder-white/30 outline-none"
                  placeholder="0"
                  type="number"
                />
              </div>
              <button
                className="w-full mt-4 bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-black/10"
                type="button"
              >
                Simpan Pengeluaran
              </button>
            </form>
          </div>

          {/* Recent Activity / Logs */}
          <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant/10">
            <h4 className="font-serif italic text-lg text-primary mb-6">
              Log Terakhir
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tight text-on-surface">
                    Reservation Confirmed
                  </p>
                  <p className="text-[11px] text-on-surface-variant italic">
                    Adinda Pratiwi – 5 mins ago
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tight text-on-surface">
                    Payment Recorded
                  </p>
                  <p className="text-[11px] text-on-surface-variant italic">
                    Dimas & Sarah – 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-tertiary mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tight text-on-surface">
                    System Update
                  </p>
                  <p className="text-[11px] text-on-surface-variant italic">
                    Katalog Updated – Today, 08:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManajemenReservasi;
