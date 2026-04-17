import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Mengambil informasi URL saat ini (misal: "/booking")
  const { pathname } = useLocation();

  // useEffect akan berjalan otomatis SETIAP KALI pathname berubah
  useEffect(() => {
    // Memaksa window browser untuk kembali ke titik X: 0, Y: 0 (Paling atas)
    window.scrollTo(0, 0);
  }, [pathname]);

  // Komponen ini bekerja di belakang layar, jadi tidak menampilkan visual apa-apa
  return null;
};

export default ScrollToTop;
