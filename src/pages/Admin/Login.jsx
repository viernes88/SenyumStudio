import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi login berhasil langsung ke dashboard
    navigate("/admin/jadwal");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 font-body bg-[#fbfbe2]">
      {/* Sisi Kiri: Visual Estetik (Hidden on Mobile) */}
      <div className="relative hidden lg:flex items-center justify-center bg-primary overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuASHFBE9BHBf-JnpD4_WqiLO5hHld6U9Z_bD_i-nOpBUqW57Tv_bZvGwIG5pL0cOY3oAUIejeywAEc-Pd4-JbQghLFzgDQOtv6PEeAfJyYY3lO0539ytHqdB9qibZwkn4JoyLxadhRhp8jNaCuMVMYMnE71527MlFhlRuYiyaQQ7-RhmpwmbKsMyUrJErUo93At0CNLiIBJGMcMD7zlGlK1MUyA7YXmHVioE9yf-S59eEMpea0IxafXEAmwfsIFU5VSL5thZZp0-MA"
          alt="Studio Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>

        <div className="relative z-10 p-16 text-white max-w-lg">
          <span
            className="material-symbols-outlined text-6xl mb-6 opacity-80"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            camera
          </span>
          <h2 className="font-headline italic text-5xl mb-6 leading-tight">
            Menyusun Cahaya dalam Frame Kehidupan.
          </h2>
          <p className="text-white/60 font-light tracking-wide leading-relaxed">
            Selamat datang kembali di panel kurator. Silakan masuk untuk
            mengelola momen berharga klien Anda hari ini.
          </p>
        </div>

        {/* Dekorasi Garis */}
        <div className="absolute bottom-10 left-10 w-24 h-[1px] bg-secondary"></div>
      </div>

      {/* Sisi Kanan: Form Login */}
      <div className="flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          {/* Logo & Header */}
          <div className="mb-12 text-center lg:text-left">
            <h1 className="font-headline italic text-3xl text-primary mb-2">
              Esensi Cahaya
            </h1>
            <p className="text-on-surface-variant/60 text-sm uppercase tracking-[0.3em]">
              Administrator Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            {/* Input Email */}
            <div className="group relative">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/50 mb-2 group-focus-within:text-secondary transition-colors">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/30 group-focus-within:text-primary transition-colors text-xl">
                  alternate_email
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-outline/30 focus:border-primary focus:ring-0 transition-all py-3 pl-8 outline-none font-body text-primary placeholder:text-primary/20"
                  placeholder="admin@esensicahaya.com"
                />
              </div>
            </div>

            {/* Input Password */}
            <div className="group relative">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/50 group-focus-within:text-secondary transition-colors">
                  Security Password
                </label>
                <a
                  href="#"
                  className="text-[10px] text-secondary hover:underline font-bold uppercase tracking-widest"
                >
                  Lupa?
                </a>
              </div>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/30 group-focus-within:text-primary transition-colors text-xl">
                  lock_open
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-outline/30 focus:border-primary focus:ring-0 transition-all py-3 pl-8 outline-none font-body text-primary placeholder:text-primary/20"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Tombol Login */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:saturate-150 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                Otentikasi Akun
                <span className="material-symbols-outlined text-sm">login</span>
              </button>
            </div>
          </form>

          {/* Footer Form */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="text-on-surface-variant/40 hover:text-primary transition-colors text-xs flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
              Kembali ke Beranda Publik
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
