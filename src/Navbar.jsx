import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-[#3266CC] fixed w-full z-20 h-28 top-0 start-0 shadow-lg">
      <div className="max-w-screen-xl flex h-full items-center justify-between mx-auto p-4 px-6">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-3 text-white">
          <img src={logo} className="h-12" alt="Logo" />
          <span className="self-center text-lg font-bold whitespace-nowrap">
            Paud Negeri Tamalate
          </span>
        </Link>

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
          <div
            className="fixed inset-0 bg-black/60 md:hidden z-30"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <div className={`
          fixed top-0 left-0 h-full w-[75%] max-w-[300px] bg-[#3b82f6] shadow-2xl 
          transition-transform duration-300 z-40
          md:static md:h-auto md:w-auto md:max-w-none md:translate-x-0 md:bg-transparent 
          md:transition-none md:shadow-none
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}>

          {/* HEADER MOBILE */}
          <div className="flex flex-col items-start p-6 border-b border-blue-400/50 md:hidden">
            <div className="flex items-center justify-between w-full mb-6">
              <img src={logo} className="h-10" alt="Logo" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-3xl"
              >
                &times;
              </button>
            </div>
            <p className="text-white font-bold text-lg uppercase">
              Paud Negeri Tamalate
            </p>
          </div>

          {/* MENU */}
          <ul className="flex flex-col md:flex-row md:items-center p-6 md:p-0 space-y-4 md:space-y-0 md:space-x-8 text-white font-medium">

            {/* BERANDA */}
            <li>
              <Link
                to="/"
                className="block py-2 hover:text-blue-200 border-b border-blue-400/30 md:border-none"
              >
                Beranda
              </Link>
            </li>

            {/* TENTANG KAMI */}
            <li className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === "tentang" ? null : "tentang")
                }
                className="flex items-center justify-between w-full py-2 hover:text-blue-200 border-b border-blue-400/30 md:border-none"
              >
                Tentang kami
                <svg className="w-4 h-4 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>

              <div className={`${activeDropdown === "tentang" ? "block" : "hidden"} md:absolute md:bg-white md:text-gray-800 md:shadow-xl md:rounded-lg md:w-44 md:mt-2 mt-2 space-y-0 pl-4 md:pl-0 z-50`}>

                <Link to="/" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">
                  Profil Sekolah
                </Link>

                <Link to="/struktur" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">
                  Struktur Organisasi
                </Link>

                <Link to="/Visimisi" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">
                  Visi Misi
                </Link>

                <Link to="/fasilitas" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">
                  Fasilitas
                </Link>

                <Link to="/kegiatan" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">
                  Kegiatan
                </Link>

              </div>
            </li>

            {/* KELAS */}
            <li className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === "kelas" ? null : "kelas")
                }
                className="flex items-center justify-between w-full py-2 hover:text-blue-200 border-b border-blue-400/30 md:border-none"
              >
                Kelas
                <svg className={`w-4 h-4 ms-1 transition-transform ${activeDropdown === "kelas" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>

              <div className={`${activeDropdown === "kelas" ? "block" : "hidden"} md:absolute md:bg-white md:text-gray-800 md:shadow-xl md:rounded-lg md:w-24 md:mt-2 mt-2 space-y-0 pl-4 md:pl-0 z-50`}>

                <Link to="/kelas/a1" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">A1</Link>
                <Link to="/kelas/a2" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">A2</Link>
                <Link to="/kelas/a3" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">A3</Link>
                <Link to="/kelas/b1" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">B1</Link>
                <Link to="/kelas/b2" className="block py-2 md:px-4 hover:bg-blue-500 md:hover:bg-gray-100 rounded text-sm">B2</Link>

              </div>
            </li>

            {/* MASUK */}
            <li className="pt-6 md:pt-0">
              <Link to="/login">
                <button className="bg-white text-[#3b82f6] font-bold py-2.5 px-8 rounded-full w-full md:w-auto shadow-md hover:bg-gray-100 transition-all active:scale-95">
                  Masuk
                </button>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 