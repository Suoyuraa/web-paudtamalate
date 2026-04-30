import React, { useState } from 'react';
import guru from '/Foto guru.png'; // Menggunakan background yang sama dengan Hero Kegiatan
import ruang from'/ruangan besar tk.png'
import bermain from'/tempat bermain.png'


const Fasilitas = () => {
  // 1. DATA FASILITAS (Tanpa ID Detail karena tidak ada tombol selengkapnya)
  const dataFasilitas = [
    { title: "Ruangan Bermain", img: [ruang], desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Taman Bermain", img: [bermain], desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Taman Bermain", img: [ruang], desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Ruangan Bermain", img: [bermain], desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Taman Bermain", img: [ruang], desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Taman Bermain", img: [bermain], desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Ruang Kelas", img: [ruang], desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ];

  // 2. LOGIKA PAGINASI (Sama seperti halaman kegiatan)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const totalPages = Math.ceil(dataFasilitas.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataFasilitas.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white w-full min-h-screen pt-[112px] pb-10">
      
      {/* SECTION HERO (Fasilitas) */}
      <div className="relative h-[400px] md:h-[350px] w-full overflow-hidden bg-slate-900">
        <img 
          src={guru} 
          alt="Background Fasilitas" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="relative z-10 flex flex-col max-w-7xl px-6 md:px-24 mx-auto justify-center h-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Fasilitas</h1>
          <p className="text-lg mt-2 opacity-90 capitalize">Paud negeri tamalate</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-10 px-6">
        
        {/* GRID FASILITAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col overflow-hidden group"
            >
              {/* Gambar dengan efek zoom halus saat hover */}
              <div className="w-full h-64 overflow-hidden rounded-xl shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Konten (Tanpa Tombol) */}
              <div className="py-4 flex flex-col">
                <h5 className="mb-1 text-xl font-bold text-gray-800">
                  {item.title}
                </h5>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TOMBOL NAVIGASI HALAMAN (PAGINASI) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            {/* Tombol Prev */}
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className={`w-10 h-10 flex items-center justify-center border rounded-full transition ${
                currentPage === 1 ? "border-gray-200 text-gray-300" : "border-gray-400 text-blue-600 hover:bg-gray-100"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Nomor Halaman */}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                  currentPage === i + 1 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Tombol Next */}
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className={`w-10 h-10 flex items-center justify-center border rounded-full transition ${
                currentPage === totalPages ? "border-gray-200 text-gray-300" : "border-gray-400 text-blue-600 hover:bg-gray-100"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fasilitas;