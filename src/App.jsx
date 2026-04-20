import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Katalog from "./pages/Katalog";
import Booking from "./pages/Booking";
import Login from "./pages/Admin/Login";
import AdminLayout from "./pages/Admin/AdminLayout";
import Jadwal from "./pages/Admin/Jadwal";
import MasterPaket from "./pages/admin/MasterPaket";
import Laporan from "./pages/Admin/Laporan";
import ManajemenReservasi from "./pages/Admin/ManajemenReservasi";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Katalog />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/jadwal" replace />} />
          <Route path="jadwal" element={<Jadwal />} />
          <Route path="paket" element={<MasterPaket />} />
          <Route path="laporan" element={<Laporan />} />
          <Route path="reservasi" element={<ManajemenReservasi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
