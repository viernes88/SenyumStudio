import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // 1. Satpam mengecek saku pengunjung (Browser LocalStorage)
  const isAuth = localStorage.getItem("isAdmin");

  // 2. ATURAN KETAT: Pengunjung HANYA boleh masuk JIKA membawa kunci bertuliskan persis "true"
  if (isAuth === "true") {
    return <Outlet />; // Persilakan masuk ke AdminLayout
  }

  // 3. Jika kuncinya null, false, kosong, atau tidak ada, TENDANG ke halaman login
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
