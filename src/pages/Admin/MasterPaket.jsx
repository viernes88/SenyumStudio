import React, { useState, useEffect } from "react";

const MasterPaket = () => {
  const [paketData, setPaketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adaPerubahan, setAdaPerubahan] = useState(false);
  const [sedangMenyimpan, setSedangMenyimpan] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/paket")
      .then((res) => res.json())
      .then((data) => {
        // --- PERBAIKAN DI SINI ---
        // Potong nilai desimal (.00) dari MySQL sejak awal data ditarik
        const dataBersih = data.map((paket) => ({
          ...paket,
          // Mengambil angka sebelum titik (misal: "400000.00" menjadi "400000")
          harga_paket: paket.harga_paket
            ? paket.harga_paket.toString().split(".")[0]
            : "0",
        }));

        setPaketData(dataBersih);
        setLoading(false);
      })
      .catch((err) => console.error("Gagal memuat paket:", err));
  }, []);

  // --- 1. FUNGSI FORMAT RUPIAH OTOMATIS (DIPERBARUI) ---
  const formatRupiah = (angka) => {
    if (angka === null || angka === undefined || angka === "") return "";

    // Potong desimal jaga-jaga jika ada
    const angkaBulat = angka.toString().split(".")[0];
    // Hilangkan semua karakter kecuali digit angka (0-9)
    const numberString = angkaBulat.replace(/[^\d]/g, "");
    // Tambahkan titik setiap 3 digit
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // --- 2. FUNGSI MENANGKAP KETIKAN & MENGHAPUS TITIK ---
  const handleHargaChange = (id, eventValue) => {
    // Hapus titik dari input pengguna sebelum disimpan ke state
    const nilaiMurni = eventValue.replace(/\./g, "");

    setPaketData((prev) =>
      prev.map((p) =>
        p.id_paket === id ? { ...p, harga_paket: nilaiMurni } : p,
      ),
    );
    setAdaPerubahan(true);
  };

  const handleSimpanPerubahan = async () => {
    setSedangMenyimpan(true);
    try {
      for (const paket of paketData) {
        await fetch(`http://localhost:5000/api/paket/${paket.id_paket}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ harga_paket: paket.harga_paket }),
        });
      }
      alert("Harga paket berhasil diperbarui!");
      setAdaPerubahan(false);
    } catch (error) {
      alert("Gagal menyimpan perubahan.");
    } finally {
      setSedangMenyimpan(false);
    }
  };

  if (loading)
    return (
      <div className="p-10 font-body text-primary">Memuat data paket...</div>
    );

  return (
    <div className="pt-8 pb-12 px-10 font-body">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h3 className="font-headline text-3xl font-bold text-primary mb-2">
              Kurasi Paket Fotografi
            </h3>
            <p className="text-stone-500">
              Sesuaikan harga layanan yang akan tampil otomatis di halaman
              Katalog pelanggan.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paketData.map((paket, index) => {
            const gambarFallback = [
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBfAq41qRa8oe9JRZmesd60UcVXm8xgf2swNRdW7DhJMPCk833phCHHz_Qex1GxV9EDJyBOJtB61L_shNnO8NQAr_RjF0zJFOmfNphOWbuB7chjltl1cFwWvG8o4sEBtOahDv9AEwJD8Jc1FBvRz1pd94rFSj4b4xDQfFeH0dTYGBtRg9_tjIdCq7PJ2yH3Sv9HpayEA5nkQltI2y31BkLy3mADIlaj33O4SYexkWkr0hGzqvzY6wNgO3y3SCXDMje6jeEaQ9rguJE",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCD93zDGUgMplLs5-PiWwDSiSaTCAeu-dt5IDvl7YJxjSb2yrO34VUfw4Lx8k4HoghINFANRBvxMHbwxefH5N1MEYH2VjXCAC9kOR331XHSmR8Y3MNhjCqxyFkp7aqd7j64lxLDuKgIv4Z4Kkrvq2KdPi5B5tDSs962Y4Bx7xO2Ok7fuQqr37oD1wL-Jc31_TLe4iSVJEnMdBEb3Pu1Zx4MQKgGYx7gkChYzOSywBgbb-GOnjWIh9ijty0cDQB-YMPozW75QxRGFYY",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDxiCkrfleXc7Y_d8l4WRSIhgh09P26su6GR7SakCMHUoIVY3AH0GKTdbpYDW4pGV_09IX4aow2oXuGMjnfhxfmuudbEz8Cmg3BfdoiyVpNDU44NbmTY0dIkZLr9PLHVyh9QmhwePDkIBxSMQ16mNZSPKusPK66h7RwqyIii2oY9YKggbQMabJJ-fcVgnL5sQZmMx-DyU_YOOIExeySAIumcnjhJRaRo4UurrEosr0G-PVC5LjbgYHY7GCGmPbfY8HGfOmcHD9Gxjk",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDBC2qlq9nl0B2Dl_QZVXvk74gDERXDsH1dae1LwldLxCuRgTvkOFuBX28w43XsaHRTkKeVhuvoFRih6L5-iGUgVxYuS98t9zVxtoJeL42o1Apv5GSWB9KzT8AUOiJiuzar-jVkmjKG4kyyTwo4PbzZ1IqWItCWHN6qWcst-itd47LPW3XVcvTTXk4nUFZtdtIkIEBcHzSRt7I2zopg7yirwbPLgKVd6FHkdBvoGHfZwnnC4uUbpXMNI6ICXS1UZ4S2XJTNIc-C4vc",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAztg4XGcwofB_bme_BXyatQHFBAnI0ON1HU0Fyf6j04ORR9ssoKD9fNRNqqB1Ybt6ifoZLlHWzynSzihTIJIQh5XMYOVlnO6-M5MZgFJNpcx6zKxzHGICRL7HD0woDaJcDACgqXaNWSNkf1sgjugqiZqlJN3RfYZRmreGME4BR1GpBVm3Qjhf0JbrEEOFANYhQs707k58nkJW-qU7tUhTbe2cKYoQUGrVgCyWo1vQ8diTiwsb7krxp-Z65yO1Nnz4AkH8tSdjIDK8",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDmjODLGR9p8uPohmkG6oZkhTLZ1-6sREmMensJLV5pKwl39SXfBlpRWaAvjnCAwzsnC8EKDpGs1D9WdNq336b_t9fWZx3Pe-adBGyA2aF_E0h2Bu8HJslLPSakOQHgJ7Xa8SZ6ZPcH8RX4cdjnu5zhmsISc5G1nNuyBlKRlhZ1f9ULptz7i3haSiiMF-_2X02BPwrWpEhAdyg-masjdcRSF1BQInKPhYlI_0QmuYgOJUfG3-xFZh_mc97pBbtLSXZNGFcLM5eGvms",
            ];

            const imgUrl =
              paket.galeri?.[0]?.url_foto ||
              gambarFallback[index % gambarFallback.length];

            return (
              <div
                key={paket.id_paket}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-primary/5 transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={imgUrl}
                    alt={paket.nama_paket}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <h4 className="absolute bottom-4 left-4 font-headline font-bold text-xl text-white">
                    {paket.nama_paket}
                  </h4>
                </div>

                <div className="p-6">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                    Harga Layanan (IDR)
                  </label>
                  <div className="flex items-center gap-2 border-b border-stone-200 focus-within:border-secondary transition-colors">
                    <span className="text-primary font-bold">Rp</span>
                    <input
                      type="text"
                      className="flex-1 bg-transparent font-bold text-lg text-primary py-1 outline-none"
                      value={formatRupiah(paket.harga_paket)}
                      onChange={(e) =>
                        handleHargaChange(paket.id_paket, e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {adaPerubahan && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <button
              onClick={handleSimpanPerubahan}
              disabled={sedangMenyimpan}
              className="bg-primary text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 hover:saturate-150 transition-all"
            >
              <span className="material-symbols-outlined">save</span>
              {sedangMenyimpan ? "Menyimpan..." : "Simpan Perubahan Harga"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MasterPaket;
