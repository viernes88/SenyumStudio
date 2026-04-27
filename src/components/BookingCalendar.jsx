import React, { useState, useEffect } from "react";

// Menerima "kabel penghubung" dari Booking.jsx melalui props
const BookingCalendar = ({ onDateSelect, selectedDateValue }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dataKetersediaan, setDataKetersediaan] = useState([]);

  // --- 1. AMBIL DATA DARI DATABASE ---
  useEffect(() => {
    fetch("http://localhost:5000/api/kalender-ketersediaan")
      .then((res) => res.json())
      .then((data) => setDataKetersediaan(data))
      .catch((err) => console.error("Gagal sinkron kalender:", err));
  }, []);

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

  const tahun = currentDate.getFullYear();
  const bulan = currentDate.getMonth();

  const prevMonth = () => setCurrentDate(new Date(tahun, bulan - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(tahun, bulan + 1, 1));

  const jumlahHariBulanIni = new Date(tahun, bulan + 1, 0).getDate();
  const hariPertama = new Date(tahun, bulan, 1).getDay();
  const jumlahHariBulanLalu = new Date(tahun, bulan, 0).getDate();

  const paddingAwal = Array.from(
    { length: hariPertama },
    (_, i) => jumlahHariBulanLalu - hariPertama + i + 1,
  );
  const tanggalBulanIni = Array.from(
    { length: jumlahHariBulanIni },
    (_, i) => i + 1,
  );

  const totalKotak = paddingAwal.length + tanggalBulanIni.length;
  const paddingAkhirLength = Math.ceil(totalKotak / 7) * 7 - totalKotak;
  const paddingAkhir = Array.from(
    { length: paddingAkhirLength },
    (_, i) => i + 1,
  );

  // Fungsi mengubah angka tanggal menjadi format YYYY-MM-DD
  const formatTanggalString = (tgl) => {
    return `${tahun}-${String(bulan + 1).padStart(2, "0")}-${String(tgl).padStart(2, "0")}`;
  };

  // Cek ke Database: Apakah 9 slot jam di hari ini sudah penuh?
  const getStatusTanggal = (tanggal) => {
    const formatTgl = formatTanggalString(tanggal);
    const infoBooking = dataKetersediaan.find((d) => d.tanggal === formatTgl);

    // Jika di tanggal ini sudah ada 9 sesi (atau lebih) yang berstatus DP/Lunas, matikan tombolnya
    if (infoBooking && infoBooking.total_sesi >= 9) {
      return "penuh";
    }
    return "tersedia";
  };

  const handleKlikTanggal = (tanggal) => {
    const status = getStatusTanggal(tanggal);
    if (status !== "tersedia") return;

    // Kirim tanggal yang diklik ke form induk (Booking.jsx)
    if (onDateSelect) {
      onDateSelect(formatTanggalString(tanggal));
    }
  };

  const isSelected = (tanggal) => {
    return selectedDateValue === formatTanggalString(tanggal);
  };

  return (
    <div className="bg-[#fbfbe2] p-8 md:p-10 rounded-3xl shadow-sm border border-[#004E50]/5 w-full max-w-2xl mx-auto font-body">
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

      <div className="grid grid-cols-7 gap-3">
        {paddingAwal.map((tgl, idx) => (
          <div
            key={`prev-${idx}`}
            className="aspect-square flex items-center justify-center text-sm text-[#004E50]/20 font-medium"
          >
            {tgl}
          </div>
        ))}

        {tanggalBulanIni.map((tgl) => {
          const status = getStatusTanggal(tgl);
          const aktif = isSelected(tgl);

          let cellStyle =
            "bg-[#f5f5dc] text-[#004E50] hover:bg-[#e4e4cc] cursor-pointer";

          if (status === "penuh") {
            cellStyle = "bg-[#004E50] text-white opacity-90 cursor-not-allowed";
          } else if (status === "maintenance") {
            cellStyle =
              "bg-[#ffdad6] text-[#93000a] opacity-90 cursor-not-allowed";
          }

          if (aktif) {
            cellStyle =
              "bg-[#f5f5dc] text-[#004E50] ring-2 ring-[#735c00] ring-offset-2 ring-offset-[#fbfbe2]";
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
