import React, { useState } from "react";

const BookingCalendar = () => {
  // 1. State untuk melacak bulan yang SEDANG DILIHAT di kalender
  // Secara default mengambil waktu aktual saat ini (Hari ini)
  const [currentDate, setCurrentDate] = useState(new Date());

  // 2. State untuk melacak tanggal yang DIKLIK oleh pengguna
  const [selectedDate, setSelectedDate] = useState(null);

  // Array nama bulan dan hari (Bahasa Indonesia)
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const namaHari = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];

  // Variabel pembantu untuk kalender
  const tahun = currentDate.getFullYear();
  const bulan = currentDate.getMonth();

  // Fungsi navigasi bulan
  const prevMonth = () => setCurrentDate(new Date(tahun, bulan - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(tahun, bulan + 1, 1));

  // --- LOGIKA MATEMATIKA KALENDER ---
  // 1. Cari tahu ada berapa hari di bulan ini? (misal: 30 atau 31)
  const jumlahHariBulanIni = new Date(tahun, bulan + 1, 0).getDate();

  // 2. Cari tahu hari pertama bulan ini jatuh pada hari apa? (0 = Minggu, 1 = Senin, dst)
  const hariPertama = new Date(tahun, bulan, 1).getDay();

  // 3. Cari tahu jumlah hari di bulan SEBELUMNYA (untuk efek tanggal abu-abu di awal grid)
  const jumlahHariBulanLalu = new Date(tahun, bulan, 0).getDate();

  // Membuat Array untuk kotak-kotak kalender
  const paddingAwal = Array.from(
    { length: hariPertama },
    (_, i) => jumlahHariBulanLalu - hariPertama + i + 1,
  );
  const tanggalBulanIni = Array.from(
    { length: jumlahHariBulanIni },
    (_, i) => i + 1,
  );

  // Menghitung sisa kotak untuk digenapkan menjadi baris yang pas (kelipatan 7)
  const totalKotak = paddingAwal.length + tanggalBulanIni.length;
  const paddingAkhirLength = Math.ceil(totalKotak / 7) * 7 - totalKotak;
  const paddingAkhir = Array.from(
    { length: paddingAkhirLength },
    (_, i) => i + 1,
  );

  // --- FUNGSI VISUAL SIMULASI ---
  // Fungsi ini HANYA untuk demonstrasi visual agar mirip dengan gambarmu.
  // Nanti, ini harus diganti dengan pengecekan data dari Backend (API).
  const getStatusTanggal = (tanggal) => {
    // Simulasi: Tanggal kelipatan 8 penuh, tanggal kelipatan 11 maintenance
    if (tanggal % 8 === 0) return "penuh";
    if (tanggal % 11 === 0) return "maintenance";
    return "tersedia";
  };

  const handleKlikTanggal = (tanggal) => {
    const status = getStatusTanggal(tanggal);
    if (status !== "tersedia") return; // Cegah klik jika penuh/maintenance

    // Simpan tanggal yang dipilih lengkap dengan bulan dan tahunnya
    setSelectedDate(new Date(tahun, bulan, tanggal));
  };

  const isSelected = (tanggal) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === tanggal &&
      selectedDate.getMonth() === bulan &&
      selectedDate.getFullYear() === tahun
    );
  };

  return (
    <div className="bg-[#fbfbe2] p-8 md:p-10 rounded-3xl shadow-sm border border-[#004E50]/5 w-full max-w-2xl mx-auto font-body">
      {/* Header Kalender (Bulan, Tahun, dan Tombol Navigasi) */}
      <div className="flex justify-between items-center mb-10 px-2">
        <h3 className="font-serif italic text-3xl md:text-4xl text-[#004E50] tracking-tight">
          {namaBulan[bulan]} <span className="font-normal">{tahun}</span>
        </h3>
        <div className="flex gap-4">
          <button
            onClick={prevMonth}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#004E50] hover:bg-[#004E50]/10 transition-colors"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={nextMonth}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#004E50] hover:bg-[#004E50]/10 transition-colors"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Label Hari (MIN, SEN, SEL, dst) */}
      <div className="grid grid-cols-7 gap-3 mb-4">
        {namaHari.map((hari) => (
          <div
            key={hari}
            className="text-center text-[10px] md:text-xs text-[#004E50]/40 uppercase tracking-widest font-medium"
          >
            {hari}
          </div>
        ))}
      </div>

      {/* Grid Tanggal */}
      <div className="grid grid-cols-7 gap-3">
        {/* Render Padding Awal (Bulan Lalu) */}
        {paddingAwal.map((tgl, idx) => (
          <div
            key={`prev-${idx}`}
            className="aspect-square flex items-center justify-center text-sm text-[#004E50]/20 font-medium"
          >
            {tgl}
          </div>
        ))}

        {/* Render Tanggal Bulan Ini */}
        {tanggalBulanIni.map((tgl) => {
          const status = getStatusTanggal(tgl);
          const aktif = isSelected(tgl);

          // Menentukan gaya (class Tailwind) berdasarkan status
          let cellStyle =
            "bg-[#f5f5dc] text-[#004E50] hover:bg-[#e4e4cc] cursor-pointer"; // Default (Tersedia)

          if (status === "penuh") {
            cellStyle = "bg-[#004E50] text-white opacity-90 cursor-not-allowed"; // Hijau Tua
          } else if (status === "maintenance") {
            cellStyle =
              "bg-[#ffdad6] text-[#93000a] opacity-90 cursor-not-allowed"; // Merah Muda
          }

          if (aktif) {
            cellStyle =
              "bg-[#f5f5dc] text-[#004E50] ring-2 ring-[#735c00] ring-offset-2 ring-offset-[#fbfbe2]"; // Outline Cokelat/Emas
          }

          return (
            <button
              key={`current-${tgl}`}
              onClick={() => handleKlikTanggal(tgl)}
              disabled={status !== "tersedia"}
              className={`aspect-square rounded-xl flex items-center justify-center text-sm md:text-base font-medium transition-all duration-200 ${cellStyle}`}
            >
              {tgl}
            </button>
          );
        })}

        {/* Render Padding Akhir (Bulan Depan) */}
        {paddingAkhir.map((tgl, idx) => (
          <div
            key={`next-${idx}`}
            className="aspect-square flex items-center justify-center text-sm text-[#004E50]/20 font-medium"
          >
            {tgl}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCalendar;
