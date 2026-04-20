import React from "react";

const Laporan = () => {
  return (
    <div className="p-12">
      {/* Header Section */}
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

        {/* Custom Dropdown Filter */}
        <div className="relative group">
          <button className="bg-surface-container-high px-6 py-3 flex items-center gap-4 rounded-lg border-b-2 border-secondary/20 hover:border-secondary transition-all duration-300">
            <span className="material-symbols-outlined text-secondary">
              calendar_today
            </span>
            <span className="font-body font-medium text-primary">
              Bulan: Oktober 2026
            </span>
            <span className="material-symbols-outlined text-primary text-sm">
              expand_more
            </span>
          </button>
        </div>
      </header>

      {/* Metric Cards Bento Layout */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Card 1: Total Pemasukan (Krem) */}
        <div className="bg-surface-container-low p-8 rounded-xl shadow-sm shadow-primary/5 border-l border-secondary/10 flex flex-col justify-between h-56 group hover:bg-surface-container transition-colors duration-500">
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
              Rp 42.500.000
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-green-700 font-bold">
            <span className="material-symbols-outlined text-xs">
              trending_up
            </span>
            <span>12.5% vs Bulan Lalu</span>
          </div>
        </div>

        {/* Card 2: Total Pengeluaran (Deep Teal) */}
        <div className="bg-primary p-8 rounded-xl shadow-xl shadow-primary/20 flex flex-col justify-between h-56 group overflow-hidden relative">
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
              Rp 12.850.000
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-white/60 font-medium relative z-10">
            <span className="material-symbols-outlined text-xs">info</span>
            <span>Terdiri dari 14 pos pengeluaran</span>
          </div>
        </div>

        {/* Card 3: Pendapatan Bersih (Emas) */}
        <div className="bg-secondary-container p-8 rounded-xl shadow-lg shadow-secondary/10 flex flex-col justify-between h-56 border border-secondary/10 group">
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
              Rp 29.650.000
            </p>
          </div>
          <div className="h-1.5 w-full bg-secondary/10 rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-[70%]"></div>
          </div>
        </div>
      </section>

      {/* Input Pengeluaran Manual */}
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
                Tambahkan detail biaya operasional baru
              </p>
            </div>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="flex flex-col gap-2 md:col-span-3">
              <label className="text-[10px] font-sans uppercase tracking-widest text-on-surface-variant/70 font-bold ml-1">
                Tanggal
              </label>
              <input
                className="bg-white/50 border border-outline-variant/40 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-5">
              <label className="text-[10px] font-sans uppercase tracking-widest text-on-surface-variant/70 font-bold ml-1">
                Keterangan
              </label>
              <input
                className="bg-white/50 border border-outline-variant/40 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30"
                placeholder="Misal: Sewa Lighting, Transportasi..."
                type="text"
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
                  className="bg-white/50 border border-outline-variant/40 rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30 w-full"
                  placeholder="0"
                  type="number"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <button
                className="w-full bg-primary text-white font-sans uppercase tracking-widest text-[10px] font-bold py-4 px-6 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2"
                type="button"
              >
                <span className="material-symbols-outlined text-sm">save</span>
                Simpan
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Detailed Analytics & Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Graphic Chart Simulation Area */}
        <div className="lg:col-span-2 bg-surface-container-low rounded-xl p-8 border border-outline-variant/20">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="text-xl font-serif italic text-primary">
                Tren Pemasukan Mingguan
              </h4>
              <p className="text-xs text-on-surface-variant/60 font-medium">
                Oktober 2026 • 4 Minggu
              </p>
            </div>
            <button className="text-secondary text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:opacity-70 transition-opacity">
              Detail{" "}
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </button>
          </div>

          {/* Stylized Graphic Grid */}
          <div className="h-64 flex items-end gap-6 relative">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
              <div className="border-b border-primary/5 w-full h-0"></div>
            </div>

            {/* Bars */}
            <div className="flex-1 bg-surface-container-highest group relative flex flex-col justify-end items-center rounded-t-lg transition-all hover:bg-primary-container/20">
              <div className="w-full bg-primary/40 h-[65%] rounded-t-lg group-hover:bg-primary transition-colors"></div>
              <span className="absolute -bottom-6 text-[10px] font-sans text-on-surface-variant/40 uppercase">
                W01
              </span>
            </div>
            <div className="flex-1 bg-surface-container-highest group relative flex flex-col justify-end items-center rounded-t-lg transition-all hover:bg-primary-container/20">
              <div className="w-full bg-primary/40 h-[85%] rounded-t-lg group-hover:bg-primary transition-colors"></div>
              <span class="absolute -bottom-6 text-[10px] font-sans text-on-surface-variant/40 uppercase">
                W02
              </span>
            </div>
            <div className="flex-1 bg-surface-container-highest group relative flex flex-col justify-end items-center rounded-t-lg transition-all hover:bg-primary-container/20">
              <div className="w-full bg-primary/40 h-[45%] rounded-t-lg group-hover:bg-primary transition-colors"></div>
              <span className="absolute -bottom-6 text-[10px] font-sans text-on-surface-variant/40 uppercase">
                W03
              </span>
            </div>
            <div className="flex-1 bg-surface-container-highest group relative flex flex-col justify-end items-center rounded-t-lg transition-all hover:bg-primary-container/20">
              <div className="w-full bg-primary/40 h-[92%] rounded-t-lg group-hover:bg-primary transition-colors"></div>
              <span className="absolute -bottom-6 text-[10px] font-sans text-on-surface-variant/40 uppercase">
                W04
              </span>
            </div>
          </div>
        </div>

        {/* Recent Highlights / Aside */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10 flex-1">
            <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">
              Top Paket
            </h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="text-secondary font-serif italic text-lg">
                  01
                </span>
                <div className="flex-1">
                  <p className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Cinematic Session
                  </p>
                  <p className="text-[10px] text-on-surface-variant/60">
                    12 Booking • Rp 18jt
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-secondary font-serif italic text-lg opacity-60">
                  02
                </span>
                <div className="flex-1">
                  <p className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Editorial Curated
                  </p>
                  <p className="text-[10px] text-on-surface-variant/60">
                    8 Booking • Rp 14jt
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-secondary font-serif italic text-lg opacity-30">
                  03
                </span>
                <div className="flex-1">
                  <p className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    The Digital Story
                  </p>
                  <p className="text-[10px] text-on-surface-variant/60">
                    5 Booking • Rp 10.5jt
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Detail Riwayat Transaksi Table Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">
              list_alt
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-serif italic text-primary">
              Detail Riwayat Transaksi
            </h3>
            <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-on-surface-variant/50 mt-1">
              Laporan arus kas masuk dan keluar secara mendetail
            </p>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-xl border border-outline-variant/10 shadow-lg overflow-hidden">
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
                {/* Row 1 */}
                <tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
                  <td className="px-6 py-4 text-xs font-medium text-on-surface-variant">
                    12 Okt 2026
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-tighter">
                      Pemasukan
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-on-surface font-medium">
                    Booking Cinematic Session - Andre & Siska
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-primary text-right">
                    Rp 1.500.000
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
                  <td className="px-6 py-4 text-xs font-medium text-on-surface-variant">
                    14 Okt 2026
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-[10px] font-bold uppercase tracking-tighter">
                      Pengeluaran
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-on-surface font-medium">
                    Sewa Lighting Studio - Day 1
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-error text-right">
                    (Rp 750.000)
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
                  <td className="px-6 py-4 text-xs font-medium text-on-surface-variant">
                    15 Okt 2026
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-tighter">
                      Pemasukan
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-on-surface font-medium">
                    Pelunasan Editorial Curated - Mrs. Diana
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-primary text-right">
                    Rp 4.200.000
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
                  <td className="px-6 py-4 text-xs font-medium text-on-surface-variant">
                    18 Okt 2026
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-[10px] font-bold uppercase tracking-tighter">
                      Pengeluaran
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-on-surface font-medium">
                    Transportasi Kru (4 Lokasi)
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-error text-right">
                    (Rp 450.000)
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
                  <td className="px-6 py-4 text-xs font-medium text-on-surface-variant">
                    20 Okt 2026
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-tighter">
                      Pemasukan
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-on-surface font-medium">
                    The Digital Story Package - Start-up Project
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-primary text-right">
                    Rp 2.100.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-surface-container-high border-t border-outline-variant/10 flex justify-between items-center">
            <p className="text-[10px] font-sans text-on-surface-variant/60 font-medium italic">
              Menampilkan 5 dari 42 transaksi
            </p>
            <button className="text-secondary text-[10px] font-bold uppercase tracking-widest hover:underline">
              Lihat Semua Laporan
            </button>
          </div>
        </div>
      </section>

      {/* Footer Internal Laporan */}
      <footer className="w-full border-t border-[#004E50]/10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        <div>
          <p className="font-serif italic text-lg text-[#004E50] mb-2">
            Esensi Cahaya
          </p>
          <p className="font-serif text-sm text-[#004E50]/60">
            © 2026 Esensi Cahaya. The Digital Curator.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="text-[#004E50]/60 hover:text-[#735C00] font-serif text-sm transition-colors"
            href="#"
          >
            Kontak
          </a>
          <a
            className="text-[#004E50]/60 hover:text-[#735C00] font-serif text-sm transition-colors"
            href="#"
          >
            Instagram
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="text-[#004E50]/60 hover:text-[#735C00] font-serif text-sm transition-colors"
            href="#"
          >
            Portofolio
          </a>
          <a
            className="text-[#004E50]/60 hover:text-[#735C00] font-serif text-sm transition-colors"
            href="#"
          >
            Ketentuan Services
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Laporan;
