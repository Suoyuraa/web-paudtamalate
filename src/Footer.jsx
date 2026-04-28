import dinas from "/Logo dinas.png"
import kotamks from "/Logo Kota Makassar.png"
import Tutwrh from "/Tut wuri Handayani.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white border-t-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* LEFT - LOGOS */}
        <div className="flex items-center w-100 h-auto gap-6">
          <img src={dinas} alt="logo1" className="h-14" />
          <img src={kotamks} alt="logo2" className="h-14" />
          <img src={Tutwrh} alt="logo3" className="h-14" />
        </div>

        {/* RIGHT - INFO */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-2">Kunjungi Kami</h3>
          <p className="text-gray-300 text-sm">
            Jl. Lamadukelleng No.07 Kota : Makassar <br />
            Provinsi : Sulawesi Selatan
          </p>

          {/* SOCIAL BUTTON */}
          <div className="flex justify-center md:justify-end gap-3 mt-4">
            
            <a
              href="#"
              className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500 transition"
            >
              
              Instagram
            </a>

            <a
              href="#"
              className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500 transition"
            >
              
              WhatsApp
            </a>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      {/* Ini belum ada tapi ini nanti untuk copyright */}
      <div className="text-center text-gray-400 text-sm pb-4">
        © 2026 Your Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;