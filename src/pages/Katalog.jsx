import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Katalog = () => {
  return (
    <div className="font-body antialiased">
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[921px] flex items-center overflow-hidden bg-surface-container-low px-8 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full max-w-7xl mx-auto">
            <div className="md:col-span-7 flex flex-col justify-center z-10">
              <div className="w-12 h-1 bg-secondary mb-8"></div>
              <h1 className="font-headline italic text-6xl md:text-8xl text-primary tracking-tight leading-[1.1] mb-6">
                Menangkap Esensi Cahaya
              </h1>
              <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                Dokumentasikan momen berharga Anda melalui lensa yang memahami
                setiap nuansa estetika.
              </p>
              <div className="flex gap-6"></div>
            </div>
            <div className="md:col-span-5 relative hidden md:block">
              <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  alt="Luxury Photography"
                  className="w-full h-full object-cover"
                  data-alt="Elegant indoor photography session in a sunlit studio with minimalist cream decor and soft shadows casting artistic patterns"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTgqrR1dZaHpcrpiHhXPETYjWYHGuX4JxZIXQ85QJhuTzc9gkjgnP7xOsgUWSk4w5u0U5AJaOgL79KI3zw5x0wYQyBEv1V3JIRMBlthWQdZTM1Hklyd4fc3jvQArXklW_e48092_0JfIR1pGp-3D8x5Y77Qjqyk7-a55DSaiulzltPO0JFjCo5V4hWOGQqu87iC1j-VyLeiRX-HD6OjVmZVPKX-PWQTZb75yR6CFsixcKyI0mPnonrdFTZkDlCD44HBGVMzLgyxRU"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-64 rounded-xl overflow-hidden editorial-shadow -rotate-6 z-20 border-4 border-surface">
                <img
                  alt="Detail Shot"
                  className="w-full h-full object-cover"
                  data-alt="Close up shot of a vintage camera lens with soft golden light reflections and elegant aesthetic details"
                  src="Logo.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="py-32 px-8 md:px-20 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="font-label text-secondary uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
                  Katalog Layanan
                </span>
                <h2 className="font-headline italic text-4xl md:text-5xl text-primary tracking-tight">
                  Pilih Cerita Yang Ingin Anda Abadikan
                </h2>
              </div>
              <div className="hidden md:block">
                <div className="h-[1px] w-32 bg-outline-variant mb-4"></div>
                <p className="font-body text-on-surface-variant italic">
                  Kurasi terbaik untuk setiap fase kehidupan.
                </p>
              </div>
            </div>

            {/* Bento-inspired Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1: Pasfoto */}
              <div className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    alt="Pasfoto"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    data-alt="Professional studio portrait for pasfoto with clean background and perfect soft lighting for a corporate look"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUbdFd1UsNpp_9KIsKZ3fCBJvwGmBR6so9yIvsgsGA1kX9svPJMP5aXwTGuxd4H3LK4_DYZuj8y-Klh8dH6bhNZ4BzqaRLyk_tspuvqc6pwXuPuOeX3hBSTm0jVXxyuKIKjRixfRNAk48Mi97w3hgp8QwX94ruRhGymVvAm08BxJDxSF_qLeoV4qNSjFhZbvS_3nAoccqUlchHRK1APhb4iO2aL5jg9b1zZ0nj1c-N4Ta8k2MMwy6uey7IOh_-BQW7FHU1ThxgZ4I"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline italic text-2xl text-primary mb-2">
                    Pasfoto
                  </h3>
                  <p className="font-body text-on-surface-variant mb-6">
                    Potret profesional untuk identitas Anda yang paling
                    esensial.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-label font-bold text-secondary text-lg">
                      Rp 150.000,00
                    </span>
                    <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg text-sm font-bold hover:bg-on-secondary-fixed-variant transition-colors">
                      Booking
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: Wisuda */}
              <div className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    alt="Wisuda"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    data-alt="Happy university graduate in cap and gown holding diploma with soft sunlight and campus background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJIkGFLuPe0rvAY-67IzML0f_vVavyYuwuMbP4JUdLEhOp4XJe4KLOImGtH3YIaz61P9mNoa9Mf7iIUWlE-MF4xrYV5kZ_Qn-AXqq0VMXak2kcgxu8PBQmPt1a6H3d1RSy2SRRqramFwtl2LuaQ2c0Cy6OB1tNBxa9IwnKYbcFFfAR6ZhVuevUEB8ncbc4T2ahXHfEucaDe4zvlncANwsCsSQGrJYhD20hbkUKUVlhb4ukCWkuGptWpVwAsAeagENMbLckrgRwKtE"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline italic text-2xl text-primary mb-2">
                    Wisuda
                  </h3>
                  <p className="font-body text-on-surface-variant mb-6">
                    Rayakan pencapaian akademik dengan memori visual yang abadi.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-label font-bold text-secondary text-lg">
                      Rp 150.000,00
                    </span>
                    <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg text-sm font-bold hover:bg-on-secondary-fixed-variant transition-colors">
                      Booking
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3: Keluarga */}
              <div className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    alt="Keluarga"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    data-alt="Beautiful multigenerational family portrait in a lush garden setting during golden hour with warm emotional atmosphere"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjKGLzEsu5PmIccIp65ty8VId7XDcT7gV7n_kkNYuH0RN0yKIt0aCjttAKngRz4n1yJo5m6GfOzrr55nNSSHepq0eXG_pfgQ2-j39xu5lKb620vYqqlqC0KHzDr8QdEaOPTjqcjxBRQxw7SjpU419KYYecre9wUcUHANazf_Q6ydGxn2Frw8S0qF5KF3oi3_XN9Uvk958GFpqiiCILfcZ197mgZASrOEoqTPqcFHcSx0m3BTtrPjlT27JfQUZF74VMH9NyuKOMWFk"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline italic text-2xl text-primary mb-2">
                    Keluarga
                  </h3>
                  <p className="font-body text-on-surface-variant mb-6">
                    Kehangatan rumah dalam bingkai estetik yang penuh makna.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-label font-bold text-secondary text-lg">
                      Rp 150.000,00
                    </span>
                    <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg text-sm font-bold hover:bg-on-secondary-fixed-variant transition-colors">
                      Booking
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 4: Pernikahan */}
              <div className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    alt="Pernikahan"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    data-alt="Cinematic wedding ceremony with bride and groom exchanging vows under elegant floral arch and dreamy soft focus"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXEJLQgWJxe7eX6KawnZ3TPeZ9YvhoeNa9_DLitIVAbSF4Zin656IKF5WPPgw7NrjqllEnfRkj1O8YiAKK8fLThydj7dGWX9u0tO7-6YHdY8m7iX30HYf3rm4_tuyOFNXvFNmgMN9I6PhCyI-JHEWrM_1Cz-UaG0cNNYrPl4Xdvsl2SpoRDwy2PLEq43aznOg1Xh_PHk-Fdf54Kbe7wNt2E7JY0ZkEnBu_scX0a8v8blDTw6jmj27fKaKiXlWpnxPrlZzSgAad8Ks"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline italic text-2xl text-primary mb-2">
                    Pernikahan
                  </h3>
                  <p className="font-body text-on-surface-variant mb-6">
                    Janji suci yang terekam dalam kurasi visual yang sinematik.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-label font-bold text-secondary text-lg">
                      Rp 150.000,00
                    </span>
                    <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg text-sm font-bold hover:bg-on-secondary-fixed-variant transition-colors">
                      Booking
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 5: Pre-Wedding */}
              <div className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    alt="Pre-Wedding"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    data-alt="Romantic pre-wedding couple walking hand in hand through a mist-covered pine forest with cinematic mood"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABdC16c2JHU8YJh5_sfNQhh5kZtDI20FtG4EZ6jXNyhRK7dYtNuzzuNjwWdV0XSN2C4GUpf5dvKPmg5K4FXF5HMr1czEXvNiSdDd1cFv5X4u3Fm293EvhCGlWKD79Ns6yo5A_X826lolv2VmBzEqcVsdJUDSXFBqyhQKvXRD7m_-_HTACFmnpNUv-3snLI1x96yJ0E7f8vaqPgQLtclWbTsMRTGcUNvs1ERfofzF7GNDLEh0N6lGfrhGKG-SNt6YvFALuSDS_aqcE"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline italic text-2xl text-primary mb-2">
                    Pre-Wedding
                  </h3>
                  <p className="font-body text-on-surface-variant mb-6">
                    Narasi awal perjalanan cinta Anda dalam keindahan komposisi.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-label font-bold text-secondary text-lg">
                      Rp 150.000,00
                    </span>
                    <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg text-sm font-bold hover:bg-on-secondary-fixed-variant transition-colors">
                      Booking
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 6: Kelulusan */}
              <div className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    alt="Kelulusan"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    data-alt="Portrait of a young graduate smiling at the camera with school background and bright natural outdoor light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_VPWqz7JNr0eDI_bAQLeE6w9uVjPbi1MJimUq5f0c44PcIePHtnU1QPIK240vAZT_EqhyIBccLhm3W_7p_Wbq5fq4uWYIGZIgNAMeFXjSnn-449IqxlZa2C_JD2vZSZOaf0f_nFcZfhxAO9esg5qSYfonkbzz55cz8RLhFDQgAn52uqHXT0hfHYtwt2bOTP62NvqmRS4O8X4P9aQb829_3OCq4uw-dCJLMkAMi8VsWele1UkbiuHqwFbEoiwfuuHz7XTm859P8GI"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline italic text-2xl text-primary mb-2">
                    Kelulusan
                  </h3>
                  <p className="font-body text-on-surface-variant mb-6">
                    Momen transisi menuju masa depan yang penuh dengan harapan.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-label font-bold text-secondary text-lg">
                      Rp 150.000,00
                    </span>
                    <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg text-sm font-bold hover:bg-on-secondary-fixed-variant transition-colors">
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 text-center">
              <Link
                to="/Booking"
                className="bg-secondary text-on-secondary px-12 py-5 rounded-lg font-bold text-lg editorial-shadow hover:bg-on-secondary-fixed-variant transition-all hover:scale-105 group"
              >
                Booking Jadwal Sekarang
                <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Galeri Inspirasi Section - Reorganized by Package */}
            <div className="mt-40">
              <div className="flex flex-col items-center text-center mb-16">
                <span className="font-label text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-4">
                  Portofolio
                </span>
                <h2 className="font-headline italic text-4xl md:text-5xl text-primary mb-6">
                  Galeri Inspirasi
                </h2>
                <div className="w-16 h-[1px] bg-outline-variant"></div>
              </div>

              <div className="space-y-32">
                {/* Package Group 1: Pasfoto */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h4 className="font-headline italic text-2xl text-primary">
                      01. Pasfoto
                    </h4>
                    <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Pasfoto Gallery 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="High fidelity professional headshot with soft key lighting and neutral gray background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUbdFd1UsNpp_9KIsKZ3fCBJvwGmBR6so9yIvsgsGA1kX9svPJMP5aXwTGuxd4H3LK4_DYZuj8y-Klh8dH6bhNZ4BzqaRLyk_tspuvqc6pwXuPuOeX3hBSTm0jVXxyuKIKjRixfRNAk48Mi97w3hgp8QwX94ruRhGymVvAm08BxJDxSF_qLeoV4qNSjFhZbvS_3nAoccqUlchHRK1APhb4iO2aL5jg9b1zZ0nj1c-N4Ta8k2MMwy6uey7IOh_-BQW7FHU1ThxgZ4I"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Pasfoto Gallery 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Clean corporate portrait of a woman with professional attire and soft rim lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3i_W_F1eL-PZ2Q-v_jF3XzF0X8y-R_Ww8N-V_X0X_V-W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Pasfoto Gallery 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Modern identity photo with artistic soft focus and elegant professional vibe"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTgqrR1dZaHpcrpiHhXPETYjWYHGuX4JxZIXQ85QJhuTzc9gkjgnP7xOsgUWSk4w5u0U5AJaOgL79KI3zw5x0wYQyBEv1V3JIRMBlthWQdZTM1Hklyd4fc3jvQArXklW_e48092_0JfIR1pGp-3D8x5Y77Qjqyk7-a55DSaiulzltPO0JFjCo5V4hWOGQqu87iC1j-VyLeiRX-HD6OjVmZVPKX-PWQTZb75yR6CFsixcKyI0mPnonrdFTZkDlCD44HBGVMzLgyxRU"
                      />
                    </div>
                  </div>
                </div>

                {/* Package Group 2: Wisuda */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h4 className="font-headline italic text-2xl text-primary">
                      02. Wisuda
                    </h4>
                    <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Wisuda Gallery 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Graduation portrait in campus setting with warm afternoon sun flare"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJIkGFLuPe0rvAY-67IzML0f_vVavyYuwuMbP4JUdLEhOp4XJe4KLOImGtH3YIaz61P9mNoa9Mf7iIUWlE-MF4xrYV5kZ_Qn-AXqq0VMXak2kcgxu8PBQmPt1a6H3d1RSy2SRRqramFwtl2LuaQ2c0Cy6OB1tNBxa9IwnKYbcFFfAR6ZhVuevUEB8ncbc4T2ahXHfEucaDe4zvlncANwsCsSQGrJYhD20hbkUKUVlhb4ukCWkuGptWpVwAsAeagENMbLckrgRwKtE"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Wisuda Gallery 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Candid smile of a graduate holding diploma scroll with soft bokeh background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_VPWqz7JNr0eDI_bAQLeE6w9uVjPbi1MJimUq5f0c44PcIePHtnU1QPIK240vAZT_EqhyIBccLhm3W_7p_Wbq5fq4uWYIGZIgNAMeFXjSnn-449IqxlZa2C_JD2vZSZOaf0f_nFcZfhxAO9esg5qSYfonkbzz55cz8RLhFDQgAn52uqHXT0hfHYtwt2bOTP62NvqmRS4O8X4P9aQb829_3OCq4uw-dCJLMkAMi8VsWele1UkbiuHqwFbEoiwfuuHz7XTm859P8GI"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Wisuda Gallery 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Close up graduation cap tassel with elegant aesthetic lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqY7mCA1DzEpHLxl0Ki4gn5r9mT6fN-7F_sbMF1pQIXPQELUIBE_jdQIzjOpXhTEDkNPQx6NZBUUZtm77AiWXU9G4oEMt-lpXvdQndhDRvTg45PWzMW6l6lJzPUj-VXkUpVRFjX1pdfk0MTYmKCjASPP4vB5zszZGtnZZD5HO1kevRE1Lr9zIS9wHrryztLtXw5Op_dsaREhc3XvcgoedDq7yYXFOGF0d-dhXdRW3wb5GRLxUHL8bLR6VoOdHyKk5vb6yyiEeJxAw"
                      />
                    </div>
                  </div>
                </div>

                {/* Package Group 3: Pernikahan */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h4 className="font-headline italic text-2xl text-primary">
                      03. Pernikahan
                    </h4>
                    <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Pernikahan Gallery 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Artistic wedding rings shot on silk background with soft morning light"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXEJLQgWJxe7eX6KawnZ3TPeZ9YvhoeNa9_DLitIVAbSF4Zin656IKF5WPPgw7NrjqllEnfRkj1O8YiAKK8fLThydj7dGWX9u0tO7-6YHdY8m7iX30HYf3rm4_tuyOFNXvFNmgMN9I6PhCyI-JHEWrM_1Cz-UaG0cNNYrPl4Xdvsl2SpoRDwy2PLEq43aznOg1Xh_PHk-Fdf54Kbe7wNt2E7JY0ZkEnBu_scX0a8v8blDTw6jmj27fKaKiXlWpnxPrlZzSgAad8Ks"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Pernikahan Gallery 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Elegant table setting at a luxury wedding reception with warm candle lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT-W_F1eL-PZ2Q-v_jF3XzF0X8y-R_Ww8N-V_X0X_V-W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Pernikahan Gallery 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Cinematic wide shot of a bridal veil blowing in the wind during golden hour"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuABdC16c2JHU8YJh5_sfNQhh5kZtDI20FtG4EZ6jXNyhRK7dYtNuzzuNjwWdV0XSN2C4GUpf5dvKPmg5K4FXF5HMr1czEXvNiSdDd1cFv5X4u3Fm293EvhCGlWKD79Ns6yo5A_X826lolv2VmBzEqcVsdJUDSXFBqyhQKvXRD7m_-_HTACFmnpNUv-3snLI1x96yJ0E7f8vaqPgQLtclWbTsMRTGcUNvs1ERfofzF7GNDLEh0N6lGfrhGKG-SNt6YvFALuSDS_aqcE"
                      />
                    </div>
                  </div>
                </div>

                {/* Package Group 4: Pre-Wedding */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h4 className="font-headline italic text-2xl text-primary">
                      04. Pre-Wedding
                    </h4>
                    <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Pre-Wedding Gallery 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Romantic pre-wedding couple walking hand in hand through a mist-covered pine forest with cinematic mood"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuABdC16c2JHU8YJh5_sfNQhh5kZtDI20FtG4EZ6jXNyhRK7dYtNuzzuNjwWdV0XSN2C4GUpf5dvKPmg5K4FXF5HMr1czEXvNiSdDd1cFv5X4u3Fm293EvhCGlWKD79Ns6yo5A_X826lolv2VmBzEqcVsdJUDSXFBqyhQKvXRD7m_-_HTACFmnpNUv-3snLI1x96yJ0E7f8vaqPgQLtclWbTsMRTGcUNvs1ERfofzF7GNDLEh0N6lGfrhGKG-SNt6YvFALuSDS_aqcE"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Pre-Wedding Gallery 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Elegant couple portrait in a minimalist indoor studio with natural soft window light"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTgqrR1dZaHpcrpiHhXPETYjWYHGuX4JxZIXQ85QJhuTzc9gkjgnP7xOsgUWSk4w5u0U5AJaOgL79KI3zw5x0wYQyBEv1V3JIRMBlthWQdZTM1Hklyd4fc3jvQArXklW_e48092_0JfIR1pGp-3D8x5Y77Qjqyk7-a55DSaiulzltPO0JFjCo5V4hWOGQqu87iC1j-VyLeiRX-HD6OjVmZVPKX-PWQTZb75yR6CFsixcKyI0mPnonrdFTZkDlCD44HBGVMzLgyxRU"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Pre-Wedding Gallery 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Aesthetic close-up of a couple's interlaced hands with soft focus background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqY7mCA1DzEpHLxl0Ki4gn5r9mT6fN-7F_sbMF1pQIXPQELUIBE_jdQIzjOpXhTEDkNPQx6NZBUUZtm77AiWXU9G4oEMt-lpXvdQndhDRvTg45PWzMW6l6lJzPUj-VXkUpVRFjX1pdfk0MTYmKCjASPP4vB5zszZGtnZZD5HO1kevRE1Lr9zIS9wHrryztLtXw5Op_dsaREhc3XvcgoedDq7yYXFOGF0d-dhXdRW3wb5GRLxUHL8bLR6VoOdHyKk5vb6yyiEeJxAw"
                      />
                    </div>
                  </div>
                </div>

                {/* Package Group 5: Kelulusan */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h4 className="font-headline italic text-2xl text-primary">
                      05. Kelulusan
                    </h4>
                    <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Kelulusan Gallery 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Portrait of a young graduate smiling at the camera with school background and bright natural outdoor light"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_VPWqz7JNr0eDI_bAQLeE6w9uVjPbi1MJimUq5f0c44PcIePHtnU1QPIK240vAZT_EqhyIBccLhm3W_7p_Wbq5fq4uWYIGZIgNAMeFXjSnn-449IqxlZa2C_JD2vZSZOaf0f_nFcZfhxAO9esg5qSYfonkbzz55cz8RLhFDQgAn52uqHXT0hfHYtwt2bOTP62NvqmRS4O8X4P9aQb829_3OCq4uw-dCJLMkAMi8VsWele1UkbiuHqwFbEoiwfuuHz7XTm859P8GI"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Kelulusan Gallery 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Group of friends celebrating graduation by tossing their caps in the air"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJIkGFLuPe0rvAY-67IzML0f_vVavyYuwuMbP4JUdLEhOp4XJe4KLOImGtH3YIaz61P9mNoa9Mf7iIUWlE-MF4xrYV5kZ_Qn-AXqq0VMXak2kcgxu8PBQmPt1a6H3d1RSy2SRRqramFwtl2LuaQ2c0Cy6OB1tNBxa9IwnKYbcFFfAR6ZhVuevUEB8ncbc4T2ahXHfEucaDe4zvlncANwsCsSQGrJYhD20hbkUKUVlhb4ukCWkuGptWpVwAsAeagENMbLckrgRwKtE"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Kelulusan Gallery 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Artistic shot of a graduation diploma and bouquet with soft focus"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3i_W_F1eL-PZ2Q-v_jF3XzF0X8y-R_Ww8N-V_X0X_V-W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X"
                      />
                    </div>
                  </div>
                </div>

                {/* Package Group 6: Keluarga */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h4 className="font-headline italic text-2xl text-primary">
                      06. Keluarga
                    </h4>
                    <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Keluarga Gallery 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Beautiful multigenerational family portrait in a lush garden setting during golden hour"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjKGLzEsu5PmIccIp65ty8VId7XDcT7gV7n_kkNYuH0RN0yKIt0aCjttAKngRz4n1yJo5m6GfOzrr55nNSSHepq0eXG_pfgQ2-j39xu5lKb620vYqqlqC0KHzDr8QdEaOPTjqcjxBRQxw7SjpU419KYYecre9wUcUHANazf_Q6ydGxn2Frw8S0qF5KF3oi3_XN9Uvk958GFpqiiCILfcZ197mgZASrOEoqTPqcFHcSx0m3BTtrPjlT27JfQUZF74VMH9NyuKOMWFk"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Keluarga Gallery 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Warm indoor family portrait laughing together on a soft cream colored sofa"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT-W_F1eL-PZ2Q-v_jF3XzF0X8y-R_Ww8N-V_X0X_V-W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X-V_W_X"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow group">
                      <img
                        alt="Keluarga Gallery 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Candid moment of a child playing in the park with parents in the background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTgqrR1dZaHpcrpiHhXPETYjWYHGuX4JxZIXQ85QJhuTzc9gkjgnP7xOsgUWSk4w5u0U5AJaOgL79KI3zw5x0wYQyBEv1V3JIRMBlthWQdZTM1Hklyd4fc3jvQArXklW_e48092_0JfIR1pGp-3D8x5Y77Qjqyk7-a55DSaiulzltPO0JFjCo5V4hWOGQqu87iC1j-VyLeiRX-HD6OjVmZVPKX-PWQTZb75yR6CFsixcKyI0mPnonrdFTZkDlCD44HBGVMzLgyxRU"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aesthetic Accent Section */}
        <section className="py-20 bg-surface-container-high overflow-hidden">
          <div className="flex whitespace-nowrap gap-12 animate-marquee py-4">
            <span className="font-headline italic text-7xl text-primary/10 select-none">
              SENYUM STUDIO FOTO
            </span>
            <span className="font-headline italic text-7xl text-primary/10 select-none">
              THE DIGITAL CURATOR
            </span>
            <span className="font-headline italic text-7xl text-primary/10 select-none">
              ESTETIKA ABADI
            </span>
            <span className="font-headline italic text-7xl text-primary/10 select-none">
              MOMEN BERHARGA
            </span>
            <span className="font-headline italic text-7xl text-primary/10 select-none">
              ESENSI CAHAYA
            </span>
          </div>
        </section>
      </main>

      {/* Footer Shell */}
      <Footer />
    </div>
  );
};

export default Katalog;
