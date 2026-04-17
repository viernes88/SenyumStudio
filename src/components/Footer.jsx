import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5DC] dark:bg-stone-900 text-[#004E50] dark:text-stone-400 font-serif text-sm w-full border-t border-[#004E50]/10 mt-20 tonal-shift-high flat no-shadows">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-16 max-w-7xl mx-auto">
        <div>
          <div className="font-serif italic text-lg text-[#004E50] mb-6">
            SenyumStudioFoto
          </div>
          <p className="font-body text-[#004E50]/60 mb-6 max-w-xs leading-relaxed">
            Kami percaya bahwa setiap momen memiliki cahayanya sendiri. Tugas
            kami hanyalah menangkap dan menyajikannya untuk Anda.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/5 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/5 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">camera</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary mb-2 uppercase tracking-widest text-[10px]">
            Navigasi
          </h4>
          <a
            className="text-[#004E50]/60 hover:text-[#004E50] transition-colors opacity-80"
            href="#"
          >
            Kontak
          </a>
          <a
            className="text-[#004E50]/60 hover:text-[#004E50] transition-colors opacity-80"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-[#004E50]/60 hover:text-[#004E50] transition-colors opacity-80"
            href="#"
          >
            Portofolio
          </a>
          <a
            className="text-[#004E50]/60 hover:text-[#004E50] transition-colors opacity-80"
            href="#"
          >
            Ketentuan Services
          </a>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-[10px]">
            Newsletter
          </h4>
          <p className="font-body text-[#004E50]/60 mb-4">
            Dapatkan inspirasi visual dan penawaran spesial langsung di email
            Anda.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-surface border-none rounded-lg focus:ring-1 focus:ring-primary/30 w-full py-3 px-4 font-sans"
              placeholder="Email Anda"
              type="email"
            />
            <button className="bg-primary text-on-primary px-6 rounded-lg hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-primary/5 text-center font-body text-[10px] uppercase tracking-widest text-on-surface-variant/50">
        © 2024 SentumStudioFoto. The Digital Curator.
      </div>
    </footer>
  );
};

export default Footer;
