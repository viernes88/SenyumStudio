import React from "react";

const Jadwal = () => {
  return (
    <div className="p-10">
      {/* Header Section */}
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-serif font-medium text-primary mb-2">
            Oktober <span className="italic font-light">2023</span>
          </h2>
          <div className="flex items-center gap-3 text-sm text-primary/60">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span> 12 Sesi
              Terjadwal
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-secondary"></span> 4
              Tersedia
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-surface-container-highest rounded-lg p-1">
            <button className="px-4 py-2 text-xs font-bold bg-surface-container-lowest text-primary rounded-md shadow-sm">
              Bulan
            </button>
            <button className="px-4 py-2 text-xs font-medium text-primary/50 hover:text-primary transition-colors">
              Minggu
            </button>
          </div>
          <button className="bg-primary text-surface px-6 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/10">
            <span className="material-symbols-outlined text-sm">add</span>
            Tambah Sesi
          </button>
        </div>
      </section>

      {/* Calendar Grid */}
      <div className="bg-surface-container-low rounded-3xl shadow-sm border border-primary/5">
        {/* Days of week */}
        <div className="grid grid-cols-7 gap-2 mb-4 px-8 pt-8">
          <div className="text-center text-xs font-label uppercase tracking-tighter text-on-surface-variant opacity-50">
            Sen
          </div>
          <div className="text-center text-xs font-label uppercase tracking-tighter text-on-surface-variant opacity-50">
            Sel
          </div>
          <div className="text-center text-xs font-label uppercase tracking-tighter text-on-surface-variant opacity-50">
            Rab
          </div>
          <div className="text-center text-xs font-label uppercase tracking-tighter text-on-surface-variant opacity-50">
            Kam
          </div>
          <div className="text-center text-xs font-label uppercase tracking-tighter text-on-surface-variant opacity-50">
            Jum
          </div>
          <div className="text-center text-xs font-label uppercase tracking-tighter text-on-surface-variant opacity-50">
            Sab
          </div>
          <div className="text-center text-xs font-label uppercase tracking-tighter text-on-surface-variant opacity-50">
            Min
          </div>
        </div>

        {/* Calendar Cells */}
        <div className="grid grid-cols-7 gap-3 p-8 pt-0">
          {/* Previous month padding */}
          <div className="aspect-square flex items-center justify-center text-on-surface-variant opacity-20 text-sm">
            25
          </div>
          <div className="aspect-square flex items-center justify-center text-on-surface-variant opacity-20 text-sm">
            26
          </div>
          <div className="aspect-square flex items-center justify-center text-on-surface-variant opacity-20 text-sm">
            27
          </div>
          <div className="aspect-square flex items-center justify-center text-on-surface-variant opacity-20 text-sm">
            28
          </div>
          <div className="aspect-square flex items-center justify-center text-on-surface-variant opacity-20 text-sm">
            29
          </div>
          <div className="aspect-square flex items-center justify-center text-on-surface-variant opacity-20 text-sm">
            30
          </div>

          {/* October 2023 */}
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            1
          </button>
          <div className="aspect-square rounded-lg bg-primary text-white/40 flex items-center justify-center text-sm cursor-not-allowed">
            2
          </div>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            3
          </button>
          <div className="aspect-square rounded-lg bg-error-container text-on-error-container/40 flex items-center justify-center text-sm cursor-not-allowed">
            4
          </div>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            5
          </button>

          {/* Today */}
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-secondary font-bold hover:ring-2 ring-secondary transition-all ring-2 ring-secondary relative">
            6
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
          </button>

          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            7
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            8
          </button>
          <div className="aspect-square rounded-lg bg-primary text-white/40 flex items-center justify-center text-sm cursor-not-allowed">
            9
          </div>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            10
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            11
          </button>
          <div className="aspect-square rounded-lg bg-primary text-white/40 flex items-center justify-center text-sm cursor-not-allowed">
            12
          </div>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            13
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            14
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            15
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            16
          </button>
          <div className="aspect-square rounded-lg bg-primary text-white/40 flex items-center justify-center text-sm cursor-not-allowed">
            17
          </div>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            18
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            19
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            20
          </button>
          <div className="aspect-square rounded-lg bg-error-container text-on-error-container/40 flex items-center justify-center text-sm cursor-not-allowed">
            21
          </div>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            22
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            23
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            24
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            25
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            26
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            27
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            28
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            29
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            30
          </button>
          <button className="aspect-square rounded-lg bg-surface-bright flex items-center justify-center text-primary font-medium hover:ring-2 ring-secondary transition-all">
            31
          </button>
        </div>

        <div className="mx-8 mb-8 flex flex-wrap gap-6 border-t border-primary/5 pt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-surface-bright rounded ring-1 ring-primary/10"></div>
            <span className="text-xs font-label text-on-surface-variant">
              Tersedia
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded"></div>
            <span className="text-xs font-label text-on-surface-variant">
              Penuh
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-error-container rounded"></div>
            <span className="text-xs font-label text-on-surface-variant">
              Maintenance
            </span>
          </div>
        </div>
      </div>

      {/* Footer Visual Hint */}
      <div className="mt-12 flex justify-center gap-24 items-center opacity-30">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
          Esensi Cahaya Editorial Studio
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>

      {/* FAB for quick action */}
      <button className="fixed bottom-10 right-10 w-14 h-14 bg-secondary text-surface rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50">
        <span className="material-symbols-outlined text-2xl">
          event_available
        </span>
      </button>
    </div>
  );
};

export default Jadwal;
