import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingCalendar from "../components/BookingCalendar";

const Booking = () => {
  return (
    <div className="font-body antialiased min-h-screen flex flex-col bg-background text-on-background selection:bg-secondary/30">
      <Navbar />

      {/* Konten Utama Booking */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-20 w-full">
        {/* Header Section */}
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-secondary font-label uppercase tracking-widest text-xs mb-4 block">
            Reservation Portal
          </span>
          <h1 className="text-4xl md:text-5xl font-headline italic tracking-tight mb-6">
            Pesan Ruang Waktu Anda
          </h1>
          <p className="text-on-surface-variant font-body text-lg leading-relaxed">
            Pilih tanggal yang tersedia untuk mengabadikan esensi momen Anda.
            Setiap sesi dikurasi dengan perhatian penuh pada detail dan cahaya.
          </p>
        </header>

        {/* BUNGKUSAN GRID UTAMA (12 Kolom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Kolom Kiri: Kalender & Legend (Makan 7 Kolom) */}
          <section className="lg:col-span-7">
            <BookingCalendar />

            {/* Legend Kalender */}
            <div className="mt-8 flex flex-wrap gap-6 border-t border-primary/5 pt-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#f5f5dc] rounded ring-1 ring-[#004E50]/10"></div>
                <span className="text-xs font-label text-on-surface-variant">
                  Tersedia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#004E50] rounded"></div>
                <span className="text-xs font-label text-on-surface-variant">
                  Penuh
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#ffdad6] rounded"></div>
                <span className="text-xs font-label text-on-surface-variant">
                  Maintenance
                </span>
              </div>
            </div>
          </section>

          {/* Kolom Kanan: Form Reservasi (Makan 5 Kolom) */}
          <section className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-surface-container-highest p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-headline mb-8 border-l-2 border-secondary pl-4">
                Detail Reservasi
              </h3>
              <form className="space-y-6">
                <div className="group">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                    Nama Panggilan
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-outline/30 focus:border-primary focus:ring-0 transition-all py-2 placeholder:text-outline-variant font-body outline-none"
                    placeholder="cth: Amara"
                    type="text"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                    Nomor WhatsApp
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-outline/30 focus:border-primary focus:ring-0 transition-all py-2 placeholder:text-outline-variant font-body outline-none"
                    placeholder="0812-xxxx-xxxx"
                    type="tel"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                    Pilihan Paket
                  </label>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-outline/30 focus:border-primary focus:ring-0 transition-all py-2 font-body appearance-none cursor-pointer outline-none">
                      <option>Essence Minimalist – 2 Jam</option>
                      <option>Golden Hour Curator – 4 Jam</option>
                      <option>The Digital Storyteller – 8 Jam</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                      expand_more
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-bold tracking-wide hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-3"
                    type="button"
                  >
                    Konfirmasi & Lanjut ke WhatsApp
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Curated Insight Card */}
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] group">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="close-up of a professional camera lens reflecting a sunlit garden with soft bokeh and golden light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIdpJHrxkXjzht4-wCxKIIINAarehBdTtwLMGAjlcy5JKDFSt3B3bfgkvoO65m9KNOZMWtjDOcw-meC0uun_no4JRtTtokWvxt8Ac4hVDD2g8-2IVlFyHVfp83vFTMZ1I6JCXafUvxb1F48vud1ZzXqMy0Jk-E13lUJrdjFUm58FGLtsqnNuOJkeaD-jS034uKwaAxNG86Khk8h-HSDqA56E9TIzh98VN4nF3hEb6c-12gdBHOyUj80U4pxqfwVCmSU2By7SbIvbw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white/80 text-xs font-label uppercase tracking-widest mb-2">
                  Did You Know?
                </p>
                <h4 className="text-white text-lg font-headline italic">
                  Cahaya terbaik pukul 04:00 PM.
                </h4>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
