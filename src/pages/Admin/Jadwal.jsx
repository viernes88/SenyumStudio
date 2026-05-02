import React, { useState, useEffect } from "react";

const Jadwal = () => {
  // 1. State Kalender
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default: Hari ini

  // 2. State untuk Data API
  const [reservasi, setReservasi] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. Mengambil Data Jadwal dari Backend
  useEffect(() => {
    fetch("http://localhost:5000/api/reservasi")
      .then((res) => res.json())
      .then((data) => {
        setReservasi(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data jadwal:", err);
        setLoading(false);
      });
  }, []);

  // Variabel Pembantu Waktu Kalender
  const tahun = currentDate.getFullYear();
  const bulan = currentDate.getMonth();
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

  // Logika Matematika Kalender
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

  // 4. Filter Data: Mengubah format tanggal MySQL agar cocok dengan kalender React
  const getJadwalPadaTanggal = (tgl, bln, thn) => {
    return reservasi.filter((j) => {
      // Ubah string tanggal dari database menjadi objek Date JavaScript
      const tglDatabase = new Date(j.tanggal_booking);
      return (
        tglDatabase.getDate() === tgl &&
        tglDatabase.getMonth() === bln &&
        tglDatabase.getFullYear() === thn
      );
    });
  };

  const hasJadwal = (tgl) => getJadwalPadaTanggal(tgl, bulan, tahun).length > 0;

  // 5. Data yang ditampilkan di panel kanan berdasarkan tanggal yang diklik
  const jadwalTerpilih = getJadwalPadaTanggal(
    selectedDate.getDate(),
    selectedDate.getMonth(),
    selectedDate.getFullYear(),
  );

  return (
    <div className="p-4 md:p-10 font-body">
      {/* Header Overview */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
        <div>
          <h2 className="font-serif italic text-3xl md:text-4xl text-primary tracking-tight">
            Jadwal Pemotretan
          </h2>
          <p className="text-on-surface-variant font-medium mt-2 text-sm md:text-base">
            Pantau dan kelola seluruh sesi pemotretan yang akan datang secara
            real-time.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* PANEL KIRI: KALENDER INTERAKTIF */}
        <section className="xl:col-span-8 bg-surface-container-lowest rounded-3xl p-6 md:p-10 shadow-sm border border-outline-variant/20">
          {/* Header Kalender */}
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-serif italic text-2xl md:text-3xl text-primary flex items-center gap-4">
              {namaBulan[bulan]} <span className="font-normal">{tahun}</span>
              {loading && (
                <span className="text-sm font-sans italic text-secondary text-on-surface-variant opacity-70">
                  Menyinkronkan data...
                </span>
              )}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={prevMonth}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-primary"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={nextMonth}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-primary"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Grid Label Hari */}
          <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
            {namaHari.map((hari) => (
              <div
                key={hari}
                className="text-center text-[10px] md:text-xs text-on-surface-variant uppercase tracking-widest font-bold"
              >
                {hari}
              </div>
            ))}
          </div>

          {/* Grid Tanggal */}
          <div className="grid grid-cols-7 gap-2 md:gap-4">
            {/* Tanggal Bulan Lalu */}
            {paddingAwal.map((tgl, idx) => (
              <div
                key={`prev-${idx}`}
                className="aspect-square flex items-center justify-center text-sm text-outline-variant/50 font-medium"
              >
                {tgl}
              </div>
            ))}

            {/* Tanggal Bulan Ini (Bisa Diklik) */}
            {tanggalBulanIni.map((tgl) => {
              const isSelected =
                selectedDate.getDate() === tgl &&
                selectedDate.getMonth() === bulan &&
                selectedDate.getFullYear() === tahun;
              const adaJadwal = hasJadwal(tgl);

              return (
                <button
                  key={`current-${tgl}`}
                  onClick={() => setSelectedDate(new Date(tahun, bulan, tgl))}
                  className={`relative aspect-square rounded-xl flex flex-col items-center justify-center text-sm md:text-base font-medium transition-all duration-200 
                    ${isSelected ? "bg-secondary text-white shadow-lg shadow-secondary/30 scale-105" : "bg-surface-container-low text-primary hover:bg-surface-container-high"}`}
                >
                  {tgl}
                  {/* Indikator Titik Emas jika ada jadwal di tanggal ini */}
                  {adaJadwal && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full absolute bottom-2 ${isSelected ? "bg-white" : "bg-secondary"}`}
                    ></span>
                  )}
                </button>
              );
            })}

            {/* Tanggal Bulan Depan */}
            {paddingAkhir.map((tgl, idx) => (
              <div
                key={`next-${idx}`}
                className="aspect-square flex items-center justify-center text-sm text-outline-variant/50 font-medium"
              >
                {tgl}
              </div>
            ))}
          </div>
        </section>

        {/* PANEL KANAN: DETAIL JADWAL BERDASARKAN DATABASE */}
        <section className="xl:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-highest rounded-3xl p-8 border border-outline-variant/10 h-full flex flex-col">
            <div className="mb-8 border-b border-primary/10 pb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-secondary mb-1 block">
                Agenda Harian
              </span>
              <h3 className="font-serif italic text-2xl text-primary">
                {selectedDate.getDate()} {namaBulan[selectedDate.getMonth()]}{" "}
                {selectedDate.getFullYear()}
              </h3>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {jadwalTerpilih.length > 0 ? (
                jadwalTerpilih.map((sesi) => (
                  <div
                    key={sesi.id_reservasi}
                    className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/20 hover:border-secondary/30 transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-lg">
                          schedule
                        </span>
                        {/* Memotong detik dari waktu (misal: "14:00:00" jadi "14:00") */}
                        <span className="font-bold text-sm text-primary">
                          {sesi.jam_booking.substring(0, 5)} WIB
                        </span>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold ${
                          sesi.status_sesi === "Selesai"
                            ? "bg-[#E8F5E9] text-[#2E7D32]"
                            : sesi.status_sesi === "Proses Foto"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-error/10 text-error"
                        }`}
                      >
                        {sesi.status_sesi}
                      </span>
                    </div>
                    <h4 className="font-serif italic text-lg text-primary mb-1">
                      {sesi.nama_pelanggan}
                    </h4>
                    <p className="text-xs text-on-surface-variant font-medium">
                      Paket: {sesi.nama_paket || "Custom / Tidak Diketahui"}
                    </p>

                    <button className="mt-4 w-full text-center py-2 bg-surface-container rounded-lg text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Lihat Detail (WA: {sesi.nomor_wa})
                    </button>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-center opacity-50">
                  <span className="material-symbols-outlined text-5xl mb-3 text-primary">
                    event_busy
                  </span>
                  <p className="text-sm font-medium text-primary">
                    Tidak ada sesi pemotretan
                    <br />
                    untuk tanggal ini.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Jadwal;
