import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Pastikan import Link benar
import gedung from '/sekolah.jpeg';
import guru from '/Foto guru.png';

// 2. Tambahkan 'export' agar 'data' bisa diimport di App.js
export const data = [
  { 
    id: 0, 
    title: "Upacara Bendera", 
    img: gedung, 
    desc: "Upacara rutin setiap senin untuk melatih kedisiplinan siswa.asdtfsaytdsayfdysaysafsafygasyufsayufgsaufyusagfausgugfusag", 
    tanggal: "4 Maret 2026",
    content: "Taman bermain untuk menikmati permainan bersama teman. Upacara Bendera di PAUD Negeri Tamalate dilaksanakan dengan khidmat. Siswa-siswi diajarkan untuk menghormati bendera merah putih dan menyanyikan lagu kebangsaan Indonesia Raya sejak dini..." 
  },
  { 
    id: 1, 
    title: "Kegiatan Mewarnai", 
    img: "https://via.placeholder.com/400x300", 
    desc: "Lomba mewarnai antar kelas untuk mengasah kreativitas anak.", 
    tanggal: "4 Maret 2026",
    content: "Kegiatan mewarnai adalah salah satu metode pembelajaran yang menyenangkan bagi anak-anak. Di sini mereka bebas mengekspresikan imajinasinya melalui warna..."
  },
  // ... Tambahkan content untuk id lainnya sesuai keinginan
];

const KegiatanSekolah = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white w-full min-h-screen pt-[112px] pb-10">
      {/* SECTION HERO */}
      <div className="relative h-[400px] md:h-[350px] w-full overflow-hidden bg-slate-900">
        <img 
          src={guru} 
          alt="Guru PAUD" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="relative z-10 max-w-7xl px-6 md:px-24 mx-auto flex flex-col justify-center h-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Kegiatan Sekolah</h1>
          <p className="text-lg mt-2 opacity-90 capitalize">Paud negeri tamalate</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[380px] shadow-90  bg-white border border-white rounded-xl shadow-lg flex flex-col overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover rounded-t-xl"
              />

              <div className="p-6 flex flex-col flex-1">
                <h5 className="mb-2 text-xl font-semibold">
                  {item.title}
                </h5>

                <p className="mb-4 text-gray-600 text-sm line-clamp-2">
                  {item.desc}
                </p>

                <p className="mb-6 font-bold text-gray-500 text-xs uppercase tracking-wider">
                  {item.tanggal}
                </p>
                
                <div className="mt-auto">
                  {/* 3. Link ke halaman detail menggunakan id */}
                  <Link 
                    to={`/kegiatan/${item.id}`} 
                    className="inline-flex w-full items-center justify-center text-sm px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Lihat Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINASI */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className={`w-10 h-10 flex items-center justify-center border rounded-full transition ${
                currentPage === 1 ? "border-gray-200 text-gray-300" : "border-gray-400 text-blue-600 hover:bg-gray-100"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                  currentPage === i + 1 ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className={`w-10 h-10 flex items-center justify-center border rounded-full transition ${
                currentPage === totalPages ? "border-gray-200 text-gray-300" : "border-gray-400 text-blue-600 hover:bg-gray-100"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KegiatanSekolah;