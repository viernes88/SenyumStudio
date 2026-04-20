import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // mendeteksi halaman
  const location = useLocation();

  // State untuk mengontrol menu HP buka/tutup
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // mengubah semua ke huruf kecil
  const isActive = (path) => {
    const currentPath = location.pathname.toLowerCase();
    if (path === "/katalog") {
      return currentPath === "/katalog" || currentPath === "/";
    }
    return currentPath === path;
  };

  return (
    <nav className="bg-[#F5F5DC]/80 dark:bg-stone-900/80 backdrop-blur-md text-[#004E50] dark:text-[#00686B] docked full-width top-0 sticky z-50 no-border bg-gradient-to-b from-[#F5F5DC] to-transparent shadow-sm shadow-[#004E50]/5 glass-nav">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto relative">
        <Link
          to="/"
          className="text-2xl font-serif font-bold text-[#004E50] dark:text-[#00686B] tracking-tighter"
        >
          SenyumStudioFoto
        </Link>

        {/* --- MENU DESKTOP (Sembunyi di HP) --- */}
        <div className="hidden md:flex items-center gap-10">
          {/* Menu Katalog */}
          <Link
            to="/katalog"
            className={`transition-colors font-sans font-medium hover:opacity-80 transition-opacity duration-300 ${isActive("/katalog") ? "text-[#004E50] font-bold border-b-2 border-[#735C00] pb-1" : "text-[#004E50]/70 hover:text-[#004E50]"}`}
          >
            Katalog
          </Link>

          {/* Menu Booking */}
          <Link
            to="/booking"
            className={`transition-colors font-sans font-medium hover:opacity-80 transition-opacity duration-300 ${isActive("/booking") ? "text-[#004E50] font-bold border-b-2 border-[#735C00] pb-1" : "text-[#004E50]/70 hover:text-[#004E50]"}`}
          >
            Booking
          </Link>

          {/* Menu Admin */}
          <Link
            to="/admin"
            className={`transition-colors font-sans font-medium hover:opacity-80 transition-opacity duration-300 ${isActive("/admin") ? "text-[#004E50] font-bold border-b-2 border-[#735C00] pb-1" : "text-[#004E50]/70 hover:text-[#004E50]"}`}
          >
            Admin
          </Link>
        </div>

        {/* --- TOMBOL AKSI & HAMBURGER --- */}
        <div className="flex items-center gap-4">
          {/* Tombol Mulai Sesi (Hanya tampil di layar agak besar - sm) */}
          <Link to="/booking" className="hidden sm:block">
            <button className="bg-primary text-on-primary px-8 py-2.5 rounded-lg font-sans font-medium scale-95 duration-200 ease-in-out hover:opacity-90">
              Mulai Sesi
            </button>
          </Link>

          {/* Tombol Hamburger (Hanya tampil di HP - md:hidden) */}
          <button
            className="md:hidden text-[#004E50] p-1 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl transition-transform duration-300">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* --- MENU DROPDOWN MOBILE --- */}
      {/* Akan meluncur turun jika isMenuOpen bernilai true */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#F5F5DC] dark:bg-stone-900 border-b border-[#004E50]/10 transition-all duration-300 ease-in-out overflow-hidden shadow-xl ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-8 py-6 gap-4">
          <Link
            to="/katalog"
            onClick={() => setIsMenuOpen(false)}
            className={`font-sans font-medium text-lg py-2 border-b border-[#004E50]/5 ${isActive("/katalog") ? "text-[#735C00] font-bold" : "text-[#004E50]"}`}
          >
            Katalog
          </Link>
          <Link
            to="/booking"
            onClick={() => setIsMenuOpen(false)}
            className={`font-sans font-medium text-lg py-2 border-b border-[#004E50]/5 ${isActive("/booking") ? "text-[#735C00] font-bold" : "text-[#004E50]"}`}
          >
            Booking
          </Link>
          <Link
            to="/admin"
            onClick={() => setIsMenuOpen(false)}
            className={`font-sans font-medium text-lg py-2 border-b border-[#004E50]/5 ${isActive("/admin") ? "text-[#735C00] font-bold" : "text-[#004E50]"}`}
          >
            Admin
          </Link>

          {/* Tombol Sesi khusus versi HP layar sangat kecil */}
          <Link
            to="/booking"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 block sm:hidden"
          >
            <button className="w-full bg-primary text-on-primary px-8 py-3 rounded-lg font-sans font-medium hover:opacity-90 transition-opacity">
              Mulai Sesi
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
