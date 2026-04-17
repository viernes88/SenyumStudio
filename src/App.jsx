import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Katalog from "./pages/Katalog";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Halaman utama (root) bisa diarahkan ke Katalog sementara atau Home */}
        <Route path="/" element={<Katalog />} />

        {/* Rute untuk halaman Katalog */}
        <Route path="/katalog" element={<Katalog />} />

        {/* Rute untuk halaman Booking */}
        <Route path="/booking" element={<Booking />} />

        {/* Kamu bisa menambahkan rute Admin nanti di sini */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
