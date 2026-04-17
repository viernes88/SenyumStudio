import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // useLocation digunakan untuk mendeteksi kita sedang di halaman mana
  const location = useLocation();

  // Fungsi kecil untuk mengecek menu mana yang aktif
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#F5F5DC]/80 dark:bg-stone-900/80 backdrop-blur-md text-[#004E50] dark:text-[#00686B] docked full-width top-0 sticky z-50 no-border bg-gradient-to-b from-[#F5F5DC] to-transparent shadow-sm shadow-[#004E50]/5 glass-nav">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <Link className="text-2xl font-serif font-bold text-[#004E50] dark:text-[#00686B] tracking-tighter">
          SenyumStudioFoto
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/Katalog"
            className="text-[#004E50] font-bold border-b-2 border-[#735C00] pb-1 font-sans font-medium"
            href="#"
          >
            Katalog
          </Link>
          <Link
            to="/Booking"
            className="text-[#004E50]/70 hover:text-[#004E50] transition-colors font-sans font-medium hover:opacity-80 transition-opacity duration-300"
            href="#"
          >
            Booking
          </Link>
          <Link
            className="text-[#004E50]/70 hover:text-[#004E50] transition-colors font-sans font-medium hover:opacity-80 transition-opacity duration-300"
            href="#"
          >
            Admin
          </Link>
        </div>
        <button className="bg-primary text-on-primary px-8 py-2.5 rounded-lg font-sans font-medium scale-95 duration-200 ease-in-out hover:opacity-90">
          Mulai Sesi
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
