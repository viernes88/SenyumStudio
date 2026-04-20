import React from "react";

const MasterPaket = () => {
  return (
    <div className="pt-8 pb-12 px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="font-headline text-3xl font-bold text-primary tracking-tight mb-2">
              Kurasi Paket Fotografi
            </h3>
            <p className="text-stone-500 font-body max-w-md">
              Kelola detail penawaran jasa dan struktur harga untuk setiap
              kategori layanan Esensi Cahaya.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 border border-primary/20 text-primary rounded-lg font-body font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-colors">
              Ekspor Laporan
            </button>
            <button className="px-6 py-2.5 bg-secondary text-on-secondary-fixed rounded-lg font-body font-bold text-xs uppercase tracking-widest shadow-lg shadow-secondary/10 hover:saturate-150 transition-all">
              Update Massal
            </button>
          </div>
        </div>

        {/* Bento-Style Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Package Card: Pasfoto */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-primary/5 flex flex-col transition-all duration-500 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Pasfoto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfAq41qRa8oe9JRZmesd60UcVXm8xgf2swNRdW7DhJMPCk833phCHHz_Qex1GxV9EDJyBOJtB61L_shNnO8NQAr_RjF0zJFOmfNphOWbuB7chjltl1cFwWvG8o4sEBtOahDv9AEwJD8Jc1FBvRz1pd94rFSj4b4xDQfFeH0dTYGBtRg9_tjIdCq7PJ2yH3Sv9HpayEA5nkQltI2y31BkLy3mADIlaj33O4SYexkWkr0hGzqvzY6wNgO3y3SCXDMje6jeEaQ9rguJE"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary rounded-full">
                  Essential
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline font-bold text-xl text-primary">
                  Pasfoto
                </h4>
                <span className="material-symbols-outlined text-stone-300">
                  more_vert
                </span>
              </div>
              <div className="mt-auto">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                  Harga Layanan (IDR)
                </label>
                <div className="flex items-center gap-2 group/input">
                  <span className="text-primary font-headline font-bold">
                    Rp
                  </span>
                  <input
                    className="flex-1 bg-transparent border-b border-stone-200 focus:border-secondary focus:ring-0 font-headline font-bold text-lg text-primary py-1 outline-none transition-colors"
                    type="text"
                    defaultValue="75.000"
                  />
                  <button className="opacity-0 group-hover/input:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      edit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Package Card: Wisuda */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-primary/5 flex flex-col transition-all duration-500 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Wisuda"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD93zDGUgMplLs5-PiWwDSiSaTCAeu-dt5IDvl7YJxjSb2yrO34VUfw4Lx8k4HoghINFANRBvxMHbwxefH5N1MEYH2VjXCAC9kOR331XHSmR8Y3MNhjCqxyFkp7aqd7j64lxLDuKgIv4Z4Kkrvq2KdPi5B5tDSs962Y4Bx7xO2Ok7fuQqr37oD1wL-Jc31_TLe4iSVJEnMdBEb3Pu1Zx4MQKgGYx7gkChYzOSywBgbb-GOnjWIh9ijty0cDQB-YMPozW75QxRGFYY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary rounded-full">
                  Signature
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline font-bold text-xl text-primary">
                  Wisuda
                </h4>
                <span className="material-symbols-outlined text-stone-300">
                  more_vert
                </span>
              </div>
              <div className="mt-auto">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                  Harga Layanan (IDR)
                </label>
                <div className="flex items-center gap-2 group/input">
                  <span className="text-primary font-headline font-bold">
                    Rp
                  </span>
                  <input
                    className="flex-1 bg-transparent border-b border-stone-200 focus:border-secondary focus:ring-0 font-headline font-bold text-lg text-primary py-1 outline-none transition-colors"
                    type="text"
                    defaultValue="450.000"
                  />
                  <button className="opacity-0 group-hover/input:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      edit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Package Card: Keluarga */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-primary/5 flex flex-col transition-all duration-500 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Keluarga"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxiCkrfleXc7Y_d8l4WRSIhgh09P26su6GR7SakCMHUoIVY3AH0GKTdbpYDW4pGV_09IX4aow2oXuGMjnfhxfmuudbEz8Cmg3BfdoiyVpNDU44NbmTY0dIkZLr9PLHVyh9QmhwePDkIBxSMQ16mNZSPKusPK66h7RwqyIii2oY9YKggbQMabJJ-fcVgnL5sQZmMx-DyU_YOOIExeySAIumcnjhJRaRo4UurrEosr0G-PVC5LjbgYHY7GCGmPbfY8HGfOmcHD9Gxjk"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary rounded-full">
                  Legacy
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline font-bold text-xl text-primary">
                  Keluarga
                </h4>
                <span className="material-symbols-outlined text-stone-300">
                  more_vert
                </span>
              </div>
              <div className="mt-auto">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                  Harga Layanan (IDR)
                </label>
                <div className="flex items-center gap-2 group/input">
                  <span className="text-primary font-headline font-bold">
                    Rp
                  </span>
                  <input
                    className="flex-1 bg-transparent border-b border-stone-200 focus:border-secondary focus:ring-0 font-headline font-bold text-lg text-primary py-1 outline-none transition-colors"
                    type="text"
                    defaultValue="850.000"
                  />
                  <button className="opacity-0 group-hover/input:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      edit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Package Card: Pernikahan */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-primary/5 flex flex-col transition-all duration-500 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Pernikahan"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBC2qlq9nl0B2Dl_QZVXvk74gDERXDsH1dae1LwldLxCuRgTvkOFuBX28w43XsaHRTkKeVhuvoFRih6L5-iGUgVxYuS98t9zVxtoJeL42o1Apv5GSWB9KzT8AUOiJiuzar-jVkmjKG4kyyTwo4PbzZ1IqWItCWHN6qWcst-itd47LPW3XVcvTTXk4nUFZtdtIkIEBcHzSRt7I2zopg7yirwbPLgKVd6FHkdBvoGHfZwnnC4uUbpXMNI6ICXS1UZ4S2XJTNIc-C4vc"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Premium Luxe
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline font-bold text-xl text-primary">
                  Pernikahan
                </h4>
                <span className="material-symbols-outlined text-stone-300">
                  more_vert
                </span>
              </div>
              <div className="mt-auto">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                  Harga Layanan (IDR)
                </label>
                <div className="flex items-center gap-2 group/input">
                  <span className="text-primary font-headline font-bold">
                    Rp
                  </span>
                  <input
                    className="flex-1 bg-transparent border-b border-stone-200 focus:border-secondary focus:ring-0 font-headline font-bold text-lg text-primary py-1 outline-none transition-colors"
                    type="text"
                    defaultValue="12.500.000"
                  />
                  <button className="opacity-0 group-hover/input:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      edit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Package Card: Pre-Wedding */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-primary/5 flex flex-col transition-all duration-500 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Pre-Wedding"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAztg4XGcwofB_bme_BXyatQHFBAnI0ON1HU0Fyf6j04ORR9ssoKD9fNRNqqB1Ybt6ifoZLlHWzynSzihTIJIQh5XMYOVlnO6-M5MZgFJNpcx6zKxzHGICRL7HD0woDaJcDACgqXaNWSNkf1sgjugqiZqlJN3RfYZRmreGME4BR1GpBVm3Qjhf0JbrEEOFANYhQs707k58nkJW-qU7tUhTbe2cKYoQUGrVgCyWo1vQ8diTiwsb7krxp-Z65yO1Nnz4AkH8tSdjIDK8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary rounded-full">
                  Elite
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline font-bold text-xl text-primary">
                  Pre-Wedding
                </h4>
                <span className="material-symbols-outlined text-stone-300">
                  more_vert
                </span>
              </div>
              <div className="mt-auto">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                  Harga Layanan (IDR)
                </label>
                <div className="flex items-center gap-2 group/input">
                  <span className="text-primary font-headline font-bold">
                    Rp
                  </span>
                  <input
                    className="flex-1 bg-transparent border-b border-stone-200 focus:border-secondary focus:ring-0 font-headline font-bold text-lg text-primary py-1 outline-none transition-colors"
                    type="text"
                    defaultValue="3.500.000"
                  />
                  <button className="opacity-0 group-hover/input:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      edit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Package Card: Kelulusan */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-primary/5 flex flex-col transition-all duration-500 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Kelulusan"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmjODLGR9p8uPohmkG6oZkhTLZ1-6sREmMensJLV5pKwl39SXfBlpRWaAvjnCAwzsnC8EKDpGs1D9WdNq336b_t9fWZx3Pe-adBGyA2aF_E0h2Bu8HJslLPSakOQHgJ7Xa8SZ6ZPcH8RX4cdjnu5zhmsISc5G1nNuyBlKRlhZ1f9ULptz7i3haSiiMF-_2X02BPwrWpEhAdyg-masjdcRSF1BQInKPhYlI_0QmuYgOJUfG3-xFZh_mc97pBbtLSXZNGFcLM5eGvms"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary rounded-full">
                  Classic
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline font-bold text-xl text-primary">
                  Kelulusan
                </h4>
                <span className="material-symbols-outlined text-stone-300">
                  more_vert
                </span>
              </div>
              <div className="mt-auto">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                  Harga Layanan (IDR)
                </label>
                <div className="flex items-center gap-2 group/input">
                  <span className="text-primary font-headline font-bold">
                    Rp
                  </span>
                  <input
                    className="flex-1 bg-transparent border-b border-stone-200 focus:border-secondary focus:ring-0 font-headline font-bold text-lg text-primary py-1 outline-none transition-colors"
                    type="text"
                    defaultValue="250.000"
                  />
                  <button className="opacity-0 group-hover/input:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      edit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Save Changes Action Bar */}
        <div className="mt-16 sticky bottom-8 flex justify-center pointer-events-none">
          <div className="pointer-events-auto bg-primary text-on-primary px-8 py-4 rounded-2xl flex items-center gap-6 shadow-2xl shadow-primary/40 backdrop-blur-md border border-white/10">
            <div className="flex flex-col">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">
                Status Perubahan
              </p>
              <p className="font-body text-sm font-medium">
                Beberapa harga telah dimodifikasi
              </p>
            </div>
            <div className="w-[1px] h-8 bg-white/20"></div>
            <button className="flex items-center gap-2 bg-secondary text-on-secondary-fixed px-6 py-2 rounded-lg font-body font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-sm">save</span>
              Simpan Perubahan
            </button>
            <button className="text-on-primary/60 hover:text-on-primary transition-colors font-body font-bold text-xs uppercase tracking-widest">
              Batalkan
            </button>
          </div>
        </div>
      </div>

      {/* Footer Admin (Khusus untuk halaman konten) */}
      <footer className="flex justify-between items-center py-6 mt-12 border-t border-stone-200/30">
        <p className="font-body text-[10px] uppercase tracking-widest text-stone-400">
          © 2024 Esensi Cahaya Editorial Photography. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            className="font-body text-[10px] uppercase tracking-widest text-stone-400 hover:text-primary underline decoration-secondary transition-all"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-body text-[10px] uppercase tracking-widest text-stone-400 hover:text-primary underline decoration-secondary transition-all"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-body text-[10px] uppercase tracking-widest text-stone-400 hover:text-primary underline decoration-secondary transition-all"
            href="#"
          >
            Support
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MasterPaket;
