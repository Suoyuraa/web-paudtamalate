import React from 'react';
import { useParams } from 'react-router-dom';

const DetailKegiatan = ({ dataKegiatan }) => {
  const { id } = useParams();
  // Cari data berdasarkan ID yang ada di URL
  const item = dataKegiatan.find((x) => x.id === parseInt(id));

  if (!item) return <div className="pt-40 text-center">Data tidak ditemukan.</div>;

  return (
    <div className="bg-white min-h-screen pt-[150px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* 1. Judul Besar */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">
          {item.title}
        </h1>

        {/* 2. Gambar Besar */}
        <div className="w-full mb-10 overflow-hidden rounded-2xl shadow-md">
          <img 
            src={item.img} 
            alt={item.title} 
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        {/* 3. Deskripsi Lengkap */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify">
          <p className="whitespace-pre-line">
            {item.content || item.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailKegiatan;