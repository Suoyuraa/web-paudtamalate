import React, { useState } from 'react';
import guru from '/foto_guru.png';
import struktur from "/struktur organisasi.jpeg";

const StructurePage = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (

    <div className="bg-white min-h-screen pt-[112px]">
      
 {/* SECTION HERO */}
 <div className="relative h-[400px] md:h-[350px] w-full overflow-hidden bg-slate-900">
        <img 
          src={guru} 
          alt="Guru PAUD" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="relative z-10 max-w-7xl px-6 md:px-24 mx-auto flex flex-col justify-center h-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Struktur Sekolah</h1>
          <p className="text-lg mt-2 opacity-90 capitalize">Paud negeri tamalate</p>
        </div>
      </div>

      {/* SECTION GAMBAR STRUKTUR */}
      <div className="max-w-6xl mx-auto py-12 px-4 flex justify-center">
        <div 
          className="cursor-pointer hover:shadow-2xl transition-shadow duration-300 border p-2 bg-white shadow-md rounded-lg"
          onClick={() => setIsOpen(true)}
        >
          <img 
            src={struktur} 
            alt="Struktur Organisasi" 
            className="max-w-full h-auto"
          />
          <p className="text-center text-sm text-gray-500 mt-2 italic">Klik gambar untuk memperbesar</p>
        </div>
      </div>

      {/* MODAL / LIGHTBOX (Muncul saat gambar diklik) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl w-full">
            {/* Tombol Close */}
            <button 
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            
            <img 
              src={struktur} 
              alt="Struktur Organisasi Full" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default StructurePage;