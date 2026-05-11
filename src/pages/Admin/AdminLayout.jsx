import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State untuk mengontrol apakah Sidebar terbuka atau tertutup di versi Mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  const isActive = (path) =>
    location.pathname.toLowerCase().includes(path.toLowerCase());

  // Fungsi untuk menutup menu otomatis di HP setelah memilih halaman
  const handleMenuClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="bg-surface-container-low text-on-surface selection:bg-secondary/30 min-h-screen font-body relative">
      {/* 1. OVERLAY GELAP (Hanya Muncul di HP saat Menu Terbuka) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* 2. SIDEBAR NAVIGASI */}
      {/* Di HP: Bersembunyi (-translate-x-full), Di PC: Selalu Tampil (lg:translate-x-0) */}
      <aside
        className={`h-screen w-72 fixed left-0 top-0 border-r border-[#004E50]/10 bg-[#F5F5DC] dark:bg-stone-950 flex flex-col py-8 px-6 shadow-[30px_0_30px_-5px_rgba(0,78,80,0.05)] z-50 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="mb-12 px-2 flex justify-between items-center">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <img
                src="/assets/Logo.png"
                alt="Logo SenyumStudio"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div>
              <h1 className="text-2xl font-serif italic text-[#004E50] dark:text-stone-100 leading-none">
                SenyumStudio
              </h1>
              <p className="font-headline font-medium tracking-tight text-[#004E50]/60 text-xs mt-1 uppercase">
                Editorial Studio
              </p>
            </div>
          </div>
          {/* Tombol Silang (X) khusus untuk menutup menu di HP */}
          <button
            className="lg:hidden text-primary"
            onClick={() => setIsSidebarOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto">
          <Link
            to="/admin/jadwal"
            onClick={handleMenuClick}
            className={`flex items-center gap-4 py-3.5 px-4 rounded-lg font-bold transition-all duration-300 ${isActive("/admin/jadwal") ? "text-[#004E50] dark:text-stone-100 border-r-2 border-[#735C00] bg-[#004E50]/5" : "text-[#004E50]/60 dark:text-stone-400 hover:text-[#004E50] hover:bg-[#004E50]/5"}`}
          >
            <span
              className="material-symbols-outlined"
              style={
                isActive("/admin/jadwal")
                  ? { fontVariationSettings: "'FILL' 1" }
                  : {}
              }
            >
              calendar_month
            </span>
            <span className="font-headline font-medium tracking-tight">
              Jadwal
            </span>
          </Link>

          <Link
            to="/admin/paket"
            onClick={handleMenuClick}
            className={`flex items-center gap-4 py-3.5 px-4 rounded-lg font-bold transition-all duration-300 ${isActive("/admin/paket") ? "text-[#004E50] dark:text-stone-100 border-r-2 border-[#735C00] bg-[#004E50]/5" : "text-[#004E50]/60 dark:text-stone-400 hover:text-[#004E50] hover:bg-[#004E50]/5"}`}
          >
            <span
              className="material-symbols-outlined"
              style={
                isActive("/admin/paket")
                  ? { fontVariationSettings: "'FILL' 1" }
                  : {}
              }
            >
              inventory_2
            </span>
            <span className="font-headline font-medium tracking-tight">
              Master Paket
            </span>
          </Link>

          <Link
            to="/admin/laporan"
            onClick={handleMenuClick}
            className={`flex items-center gap-4 py-3.5 px-4 rounded-lg font-bold transition-all duration-300 ${isActive("/admin/laporan") ? "text-[#004E50] dark:text-stone-100 border-r-2 border-[#735C00] bg-[#004E50]/5" : "text-[#004E50]/60 dark:text-stone-400 hover:text-[#004E50] hover:bg-[#004E50]/5"}`}
          >
            <span
              className="material-symbols-outlined"
              style={
                isActive("/admin/laporan")
                  ? { fontVariationSettings: "'FILL' 1" }
                  : {}
              }
            >
              analytics
            </span>
            <span className="font-headline font-medium tracking-tight">
              Laporan
            </span>
          </Link>

          <Link
            to="/admin/reservasi"
            onClick={handleMenuClick}
            className={`flex items-center gap-4 py-3.5 px-4 rounded-lg font-bold transition-all duration-300 ${isActive("/admin/reservasi") ? "text-[#004E50] dark:text-stone-100 border-r-2 border-[#735C00] bg-[#004E50]/5" : "text-[#004E50]/60 dark:text-stone-400 hover:text-[#004E50] hover:bg-[#004E50]/5"}`}
          >
            <span
              className="material-symbols-outlined"
              style={
                isActive("/admin/reservasi")
                  ? { fontVariationSettings: "'FILL' 1" }
                  : {}
              }
            >
              book_online
            </span>
            <span className="font-headline font-medium tracking-tight">
              Manajemen Reservasi
            </span>
          </Link>
        </nav>

        <div className="mt-auto pt-4 border-t border-primary/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-error hover:bg-error/10 rounded-lg transition-colors text-xs uppercase tracking-widest font-bold"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            Keluar
          </button>
        </div>
      </aside>

      {/* 3. TOP APP BAR (HEADER) */}
      {/* Di HP: Lebar 100%, Di PC: Lebar layar dikurangi Sidebar */}
      <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-18rem)] h-16 z-30 bg-[#F5F5DC]/80 dark:bg-stone-950/80 backdrop-blur-xl flex items-center justify-between px-4 lg:px-10 transition-all duration-300">
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Tombol Hamburger (Hanya muncul di Layar Kecil) */}
          <button
            className="lg:hidden p-2 text-primary hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsSidebarOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          <span className="hidden md:inline font-body text-xs tracking-[0.2em] uppercase font-bold text-[#004E50]">
            Studio Manager
          </span>
          <span className="hidden md:block h-4 w-[1px] bg-primary/20"></span>
          <span className="text-sm font-serif italic text-primary/70">
            Dashboard
          </span>
        </div>

        {/* <div className="flex items-center gap-2 md:gap-6">
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 md:p-0 text-primary/70 hover:text-[#735C00] transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 md:top-0 md:right-0 w-2 h-2 bg-secondary rounded-full border border-surface"></span>
            </button>
          </div>
        </div> */}
      </header>

      {/* 4. MAIN CONTENT AREA */}
      <main className="ml-0 lg:ml-72 pt-16 min-h-screen bg-surface-container-low transition-all duration-300">
        {/* Supaya konten di HP tidak menabrak batas layar, kita berikan padding p-4 untuk layar kecil */}
        <div className="p-4 lg:p-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
