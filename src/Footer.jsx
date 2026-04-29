import dinas from "/Logo dinas.png"
import kotamks from "/Logo Kota Makassar.png"
import Tutwrh from "/Tut wuri Handayani.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white border-t-2 border-blue-500">
      {/* - Menyesuaikan px-6 md:px-24 agar sejajar dengan konten Visi Misi kamu sebelumnya.
         - items-center md:items-start agar di desktop teks info sejajar atas dengan logo.
      */}
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-12 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* LEFT - LOGOS */}
        {/* Menggunakan w-fit agar tidak mengambil ruang berlebih */}
        <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 w-fit">
          <img src={dinas} alt="logo1" className="h-12 md:h-16 object-contain" />
          <img src={kotamks} alt="logo2" className="h-12 md:h-16 object-contain" />
          <img src={Tutwrh} alt="logo3" className="h-12 md:h-16 object-contain" />
        </div>

        {/* RIGHT - INFO */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-2">Kunjungi Kami</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Jl. Lamadukelleng No.07 <br className="hidden md:block" /> 
            Kota Makassar, Sulawesi Selatan
          </p>

          {/* SOCIAL BUTTON */}
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="flex items-center gap-2 border border-blue-400/50 bg-white/5 px-4 py-2 rounded-lg text-xs md:text-sm hover:bg-blue-600 transition-all duration-300"
            >
              Instagram
            </a>

            <a
              href="#"
              className="flex items-center gap-2 border border-blue-400/50 bg-white/5 px-4 py-2 rounded-lg text-xs md:text-sm hover:bg-blue-600 transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM - COPYRIGHT */}
      <div className="border-t border-white/10 mx-6 md:mx-24">
        <div className="text-center text-gray-500 text-xs py-6">
          © 2026 <span className="font-semibold text-gray-400">Paud Negeri Tamalate</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;