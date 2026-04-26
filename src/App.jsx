import { act, useState } from "react";
import logo from "/logo.png";
import sekolah from "/sekolah.png";
import kepalaskl from "/foto kepala sekolah paud.png"



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
    <nav className="bg-[#3266CC] fixed w-full z-20 h-28 top-0 start-0">
      <div className="max-w-screen-xl flex h-full items-center justify-between mx-auto p-4 px-6">
        
        {/* LOGO */}
        <a href="#" className="flex items-center space-x-3 text-white">
          <img src={logo} className="h-12" alt="Logo" />
          <span className="self-center text-lg font-bold whitespace-nowrap">Paud Negeri Tamalate</span>
        </a>

        {/* HAMBURGER */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex items-center p-2 text-white rounded-lg md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* OVERLAY */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/60 md:hidden z-30" onClick={() => setIsMenuOpen(false)} />
        )}

        {/* SIDEBAR */}
        <div className={`
         fixed top-0 left-0 h-full w-[75%] max-w-[300px] bg-[#3b82f6] shadow-2xl 
         transition-transform duration-300 z-40
         md:static md:h-auto md:w-auto md:max-w-none md:translate-x-0 md:bg-transparent 
         md:transition-none md:shadow-none
         ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          
          {/* HEADER SIDEBAR (Mobile Only) */}
          <div className="flex flex-col items-start p-6 border-b border-blue-400/50 md:hidden">
            <div className="flex items-center justify-between w-full mb-6">
               <img src={logo} className="h-10" alt="Logo" />
               <button onClick={() => setIsMenuOpen(false)} className="text-white text-3xl">&times;</button>
            </div>
            <p className="text-white font-bold text-lg leading-tight uppercase">Paud Negeri Tamalate</p>
          </div>

          {/* LIST MENU - DISINI PERBAIKANNYA */}
          <ul className="flex flex-col md:flex-row md:items-center p-6 md:p-0 space-y-4 md:space-y-0 md:space-x-8 text-white font-medium bg-[#3b82f6] md:bg-transparent">
            
            <li className="text-left w-full md:w-auto">
              <a href="#" className="block py-2 hover:text-blue-200 border-b border-blue-400/30 md:border-none">Beranda</a>
            </li>

            <li className="relative text-left w-full md:w-auto">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "tentang" ? null : "tentang")}
                className="flex items-center justify-between w-full py-2 hover:text-blue-200 border-b border-blue-400/30 md:border-none"
              >
                Tentang kami
                <svg className="w-4 h-4 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>

              <div className={`${activeDropdown === "tentang" ? "block" : "hidden"} md:absolute md:bg-white md:text-gray-800 md:shadow-xl md:rounded-lg md:w-44 md:mt-2 mt-2 space-y-0 pl-4 md:pl-0`}>
                <a href="#" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">Profil Sekolah</a>
                <a href="#" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">Struktur Organisasi</a>
                <a href="#" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">Visi Misi</a>
                <a href="#" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">Fasilitas</a>
                <a href="#" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">Kegiatan</a>
              </div>
            </li>

            <li className="relative text-left w-full md:w-auto">
              <button
                onClick={() =>  setActiveDropdown(activeDropdown === "kelas" ? null : "kelas")}
                className="flex items-center justify-between w-full py-2 hover:text-blue-200 border-b border-blue-400/30 md:border-none"
              >
                Kelas
                <svg className="w-4 h-4 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>

              <div className={`${activeDropdown === "kelas" ? "block" : "hidden"} md:absolute md:bg-white md:text-gray-800 md:shadow-xl md:rounded-lg md:w-24 md:mt-2 mt-2 space-y-0 pl-4 md:pl-0`}>
                <a href="#" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">A1</a>
                <a href="#" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">A2</a>
                <a href="#" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">A3</a>
                <a href="#" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">B1</a>
                <a href="#" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">B2</a>
              </div>
            </li>



            <li className="pt-6 md:pt-0 w-full md:w-auto">
              <button className="bg-white text-[#3b82f6] font-bold py-2.5 px-8 rounded-full w-full md:w-auto shadow-md hover:bg-gray-100 transition-all active:scale-95">
                Masuk
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* isi halaman */}
    <section className="w-full bg-[#3266CC] pt-[130px] pb-32 rounded-[20px]">
      
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        
        {/* Kontainer Gambar */}
        <div className="relative h-[500px] md:h-[600px] rounded-[10px] overflow-hidden shadow-2xl">
          
          <img 
            src={sekolah} 
            alt="Gedung Sekolah" 
            /* object-top memastikan atap gedung tidak kepotong navbar */
            className="w-full h-full object-top object-cover object-contain object-center block"
          />
x
          {/* Overlay dan Teks */}
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-8 md:p-20">
             <h1 className="text-white text-3xl md:text-5xl font-bold max-w-lg">
                Rumah cerdas ceria dan berkarakter
             </h1>
             <button className="mt-8 bg-[#3b82f6] text-white w-fit px-10 py-3 rounded-full font-bold">
                Kontak Kami
             </button>
          </div>

        </div>
      </div>

      <div className="max-w-screen-xl py-16 mx-auto px-6">
  
  {/* Container Utama menggunakan items-start */}
  <div className="flex flex-col md:flex-row items-start gap-10">
    
    {/* KIRI: FOTO */}
    <div className="flex flex-col items-center text-center md:w-1/3 w-full">
      <img
        src={kepalaskl}
        alt="Kepala Sekolah"
        className="w-72 h-96 object-cover rounded-tl-[100px] rounded-br-[10px] bg-white shadow-lg mb-4"
      />
      <h3 className="text-xl text-white font-bold">Cahaya M.pd</h3>
      <p className="text-white">Kepala Sekolah Paud Negeri Tamalate</p>
    </div>

    {/* KANAN: JUDUL + TEKS */}
    <div className="md:w-2/3 text-white">
      {/* Judul ditaruh di sini agar di desktop dia di samping foto */}
      {/* text-center di mobile, text-left di desktop */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left uppercase tracking-wide">
        Sambutan Kepala Sekolah
      </h2>

      <div className="text-justify space-y-4">
        <p>
        Selamat datang di website resmi PAUD Negeri Tamalate. Kami hadir sebagai jendela informasi bagi orang tua dan masyarakat untuk mengenal lebih dekat lingkungan belajar kami. Masa usia dini adalah masa emas (Golden Age) yang sangat krusial, dan kami berkomitmen untuk mendampingi tumbuh kembang anak dengan penuh kasih sayang, keceriaan, dan dedikasi tinggi.
        </p>
        <p>
        Di PAUD Negeri Tamalate, kami menerapkan metode belajar sambil bermain yang dirancang untuk menggali potensi unik setiap anak. Fokus kami bukan hanya pada kecerdasan kognitif, tetapi juga pada pembentukan karakter, kemandirian, dan penanaman nilai-nilai moral sejak dini. Kami ingin memastikan setiap siswa merasa aman dan bahagia dalam mengeksplorasi dunia di sekitar mereka.
        </p>
        <p>
        Pendidikan yang berhasil adalah hasil sinergi yang kuat antara sekolah, orang tua, dan masyarakat. Melalui platform ini, kami berharap komunikasi dapat terjalin dengan lebih baik demi masa depan putra-putri kita. Terima kasih atas kepercayaan Anda telah menitipkan pendidikan buah hati tercinta kepada kami. Mari bersama mencetak generasi yang cerdas, ceria, dan berkarakter.
        </p>
      </div>
    </div>

  </div>
</div>

    </section>
    


    <div className="bg-white w-full pb-100"></div>
    
  </>
  );
};

export default Navbar;