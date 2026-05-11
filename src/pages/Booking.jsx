import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingCalendar from "../components/BookingCalendar";

const Booking = () => {
  const navigate = useNavigate();

  const nomorAdmin = import.meta.env.VITE_WHATSAPP_ADMIN;

  const [daftarPaket, setDaftarPaket] = useState([]);

  // --- FITUR BARU: State untuk menampung jam yang sudah penuh ---
  const [jamSibuk, setJamSibuk] = useState([]);

  // Daftar jam operasional studio Anda (Silakan sesuaikan)
  const slotWaktu = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "19:00",
    "20:00",
  ];

  const [formData, setFormData] = useState({
    nama_pelanggan: "",
    nomor_wa: "",
    tanggal_booking: "",
    jam_booking: "", // Akan diisi dari klik tombol jam
    id_paket: "",
    harga_paket: 0,
  });

  const [loading, setLoading] = useState(false);
  const [pesan, setPesan] = useState({ tipe: "", teks: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/paket")
      .then((res) => res.json())
      .then((data) => setDaftarPaket(data))
      .catch((err) => console.error("Gagal mengambil paket:", err));
  }, []);

  // --- FITUR Efek pencarian jadwal kosong otomatis ---
  useEffect(() => {
    if (formData.tanggal_booking) {
      // Panggil API Backend yang kita buat sebelumnya
      fetch(
        `http://localhost:5000/api/cek-jadwal?tanggal=${formData.tanggal_booking}`,
      )
        .then((res) => res.json())
        .then((data) => setJamSibuk(data)) // Menyimpan array jam, misal ["10:00:00", "14:00:00"]
        .catch((err) => console.error("Gagal cek jadwal:", err));
    } else {
      setJamSibuk([]); // Kosongkan jika tidak ada tanggal
    }
  }, [formData.tanggal_booking]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "id_paket") {
      const paketTerpilih = daftarPaket.find(
        (p) => p.id_paket === parseInt(value),
      );
      setFormData({
        ...formData,
        id_paket: value,
        harga_paket: paketTerpilih ? paketTerpilih.harga_paket : 0,
      });
    } else if (name === "tanggal_booking") {
      // Jika user mengganti tanggal, hapus pilihan jam sebelumnya agar tidak salah simpan
      setFormData({ ...formData, tanggal_booking: value, jam_booking: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validasi Jam
    if (!formData.jam_booking) {
      setPesan({
        tipe: "error",
        teks: "Silakan pilih jam sesi pemotretan terlebih dahulu.",
      });
      return;
    }

    setLoading(true);
    setPesan({ tipe: "", teks: "" });

    // Cari nama paket untuk teks WA agar lebih informatif
    const paketTerpilih = daftarPaket.find(
      (p) => p.id_paket === parseInt(formData.id_paket),
    );
    const namaPaketFix = paketTerpilih
      ? paketTerpilih.nama_paket
      : "Paket Pilihan";

    const payload = {
      nama_pelanggan: formData.nama_pelanggan,
      nomor_wa: formData.nomor_wa,
      tanggal_booking: formData.tanggal_booking,
      jam_booking: formData.jam_booking,
      status_sesi: "Menunggu",
      id_paket: parseInt(formData.id_paket),
      harga_paket: formData.harga_paket,
    };

    try {
      const respons = await fetch("http://localhost:5000/api/reservasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await respons.json();

      if (respons.ok) {
        // --- PROSES WHATSAPP MENGGUNAKAN NOMOR DARI .ENV ---
        const templatePesan = encodeURIComponent(
          `*KONFIRMASI BOOKING - SENYUMSTUDIO* 📸\n\n` +
            `Halo Admin, saya baru saja melakukan reservasi.\n\n` +
            `*Detail:* \n` +
            `👤 Nama: ${formData.nama_pelanggan}\n` +
            `📦 Paket: ${namaPaketFix}\n` +
            `📅 Tanggal: ${formData.tanggal_booking}\n` +
            `⏰ Jam: ${formData.jam_booking}\n\n` +
            `Mohon instruksi selanjutnya. Terima kasih!`,
        );

        // Memanggil nomorAdmin yang diambil dari import.meta.env
        const urlWA = `https://wa.me/${nomorAdmin}?text=${templatePesan}`;

        // Buka tab WhatsApp
        window.open(urlWA, "_blank");
        // ---------------------------------------------------

        setPesan({
          tipe: "sukses",
          teks: "Reservasi berhasil dicatat! Mengalihkan ke WhatsApp...",
        });

        // Reset form setelah berhasil
        setFormData({
          nama_pelanggan: "",
          nomor_wa: "",
          tanggal_booking: "",
          jam_booking: "",
          id_paket: "",
          harga_paket: 0,
        });

        setTimeout(() => navigate("/"), 4000);
      } else {
        setPesan({
          tipe: "error",
          teks: data.pesan || "Terjadi kesalahan sistem.",
        });
      }
    } catch (error) {
      setPesan({
        tipe: "error",
        teks: "Koneksi terputus. Pastikan server menyala.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-body antialiased min-h-screen flex flex-col bg-background text-on-background selection:bg-secondary/30">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-20 w-full">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <section className="lg:col-span-7">
            <BookingCalendar
              selectedDateValue={formData.tanggal_booking}
              onDateSelect={(tglPilihan) =>
                setFormData({
                  ...formData,
                  tanggal_booking: tglPilihan,
                  jam_booking: "",
                })
              }
            />
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

          <section className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-surface-container-highest p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-headline mb-8 border-l-2 border-secondary pl-4">
                Detail Reservasi
              </h3>

              {pesan.teks && (
                <div
                  className={`p-4 rounded-lg mb-6 text-sm font-bold flex items-center gap-3 ${pesan.tipe === "sukses" ? "bg-[#d2e8d4] text-[#1b5e20]" : "bg-[#ffdad6] text-[#93000a]"}`}
                >
                  <span className="material-symbols-outlined text-base">
                    {pesan.tipe === "sukses" ? "check_circle" : "error"}
                  </span>
                  {pesan.teks}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                    Nama Panggilan
                  </label>
                  <input
                    name="nama_pelanggan"
                    value={formData.nama_pelanggan}
                    onChange={handleChange}
                    required
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
                    name="nomor_wa"
                    value={formData.nomor_wa}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-outline/30 focus:border-primary focus:ring-0 transition-all py-2 placeholder:text-outline-variant font-body outline-none"
                    placeholder="0812-xxxx-xxxx"
                    type="tel"
                  />
                </div>

                {/* Pilih Tanggal Pindah Ke Atas Sendiri */}
                <div className="group">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                    Pilih Tanggal
                  </label>
                  <input
                    name="tanggal_booking"
                    value={formData.tanggal_booking}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-outline/30 focus:border-primary focus:ring-0 transition-all py-2 font-body outline-none text-on-surface-variant"
                    type="date"
                  />
                </div>

                {/* --- GRID TOMBOL JAM INTERAKTIF --- */}
                <div className="group">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3 group-focus-within:text-primary transition-colors">
                    Pilih Jam Sesi
                  </label>
                  {formData.tanggal_booking ? (
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                      {slotWaktu.map((jam) => {
                        // Cek apakah jam ini sudah masuk database
                        const isFull = jamSibuk.some((s) => s.startsWith(jam));
                        const isSelected = formData.jam_booking === jam;

                        return (
                          <button
                            key={jam}
                            type="button"
                            disabled={isFull}
                            onClick={() =>
                              setFormData({ ...formData, jam_booking: jam })
                            }
                            className={`py-2 rounded-lg text-sm font-bold transition-all border ${
                              isFull
                                ? "bg-surface-container text-outline-variant/50 border-outline/10 cursor-not-allowed" // Warna Jam Penuh
                                : isSelected
                                  ? "bg-secondary text-white border-secondary shadow-md" // Warna Jam Terpilih
                                  : "bg-transparent text-primary border-outline/30 hover:border-primary" // Warna Jam Tersedia
                            }`}
                          >
                            {jam}
                            {isFull && (
                              <span className="block text-[9px] font-normal uppercase tracking-widest mt-0.5 opacity-70">
                                Penuh
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-xs text-secondary font-medium italic border border-secondary/20 p-4 rounded-xl bg-secondary/5">
                      Silakan pilih tanggal terlebih dahulu untuk melihat
                      ketersediaan jam.
                    </div>
                  )}
                </div>

                <div className="group">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                    Pilihan Paket
                  </label>
                  <div className="relative">
                    <select
                      name="id_paket"
                      value={formData.id_paket}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-outline/30 focus:border-primary focus:ring-0 transition-all py-2 font-body appearance-none cursor-pointer outline-none text-on-surface-variant"
                    >
                      <option value="" disabled>
                        -- Pilih Paket --
                      </option>
                      {daftarPaket.map((paket) => (
                        <option key={paket.id_paket} value={paket.id_paket}>
                          {paket.nama_paket} - Rp{" "}
                          {paket.harga_paket.toLocaleString("id-ID")}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                      expand_more
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-bold tracking-wide hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {loading
                      ? "Memproses Data..."
                      : "Konfirmasi & Lanjut ke WhatsApp"}
                    {!loading && (
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>

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
