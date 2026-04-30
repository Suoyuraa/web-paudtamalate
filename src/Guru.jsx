import React from 'react';
import cahaya from '/bu cahaya.png';
import guru from '/Foto guru.png';

// Pastikan GuruCard ada di sini agar bisa dipanggil
const GuruCard = ({ foto, nama, gelar, jabatan }) => {
  return (
    <div className="w-full max-w-[16rem] md:max-w-[18rem] bg-white shadow-md border border-gray-100 overflow-hidden">
      <div className="h-72 w-full bg-gray-200">
        <img 
          src={foto} 
          alt={nama} 
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-5 text-center">
        <h4 className="text-lg font-bold text-gray-800 leading-tight">
          {nama}{gelar ? `, ${gelar}` : ""}
        </h4>
        <p className="text-xs text-gray-500 font-semibold uppercase mt-1">
          {jabatan}
        </p>
      </div>
    </div>
  );
};

const dataStruktur = {
  kepalaSekolah: {
    nama: "Cahaya", 
    gelar: "S.Pd., M.Pd",
    jabatan: "Kepala Sekolah",
    foto: cahaya, // DI PERBAIKI: Tidak pakai kurung kurawal {}
  },
  tenagaKependidikan: [
    { nama: "Nama Admin", jabatan: "Administrasi", foto: "/admin.png" },
    { nama: "Nama Sarpras", jabatan: "Sarana Prasarana", foto: "/sarpras.png" },
    { nama: "Nama Bendahara", jabatan: "Bendahara", foto: "/bendahara.png" },
  ],
  guru: [
    { nama: "Guru 1", gelar: "S.Pd", jabatan: "Guru Kelas", foto: "/g1.png" },
    { nama: "Guru 2", gelar: "S.Pd", jabatan: "Guru Kelas", foto: "/g2.png" },
    { nama: "Guru 3", gelar: "S.Pd", jabatan: "Guru Kelas", foto: "/g2.png" },
    { nama: "Guru 4", gelar: "S.Pd", jabatan: "Guru Kelas", foto: "/g2.png" },
    { nama: "Guru 5", gelar: "S.Pd", jabatan: "Guru Kelas", foto: "/g2.png" },
    { nama: "Guru 6", gelar: "S.Pd", jabatan: "Guru Kelas", foto: "/g2.png" },
    { nama: "Guru 7", gelar: "S.Pd", jabatan: "Guru Kelas", foto: "/g2.png" },
    { nama: "Guru 8", gelar: "S.Pd", jabatan: "Guru Kelas", foto: "/g2.png" },
    { nama: "Guru 9", gelar: "S.Pd", jabatan: "Guru Kelas", foto: "/g2.png" },
    { nama: "Guru 10", gelar: "S.Pd", jabatan: "Guru Kelas", foto: "/g2.png" },
  ],
  keamanan: [
    { nama: "Satpam 1", jabatan: "Satpam", foto: "/s1.png" },
    { nama: "Satpam 2", jabatan: "Satpam", foto: "/s2.png" },
  ]
};

const DaftarStruktur = () => {
  return (
    <>
    
   {/* --- BAGIAN ATAS: SECTION HERO --- */}
   <div className="relative h-[400px] md:h-[400px] w-full overflow-hidden bg-slate-900">
        <img 
          src={guru} 
          alt="Guru PAUD" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="relative z-10 flex flex-col max-w-7xl px-8 md:px-24 mx-auto justify-center h-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Struktur Sekolah</h1>
          <p className="text-lg mt-2 opacity-90 capitalize">Paud Negeri Tamalate</p>
        </div>
      </div>

      {/* --- BAGIAN BAWAH: KONTEN KARTU --- */}
      <div className="bg-gray-50 min-h-screen pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* 1. KEPALA SEKOLAH */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pimpinan Sekolah</h2>
            <div className="flex justify-center">
              {dataStruktur.kepalaSekolah && <GuruCard {...dataStruktur.kepalaSekolah} />}
            </div>
          </div>

          {/* 2. TENAGA KEPENDIDIKAN */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Tenaga Kependidikan</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {dataStruktur.tenagaKependidikan.map((item, index) => (
                <GuruCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* 3. GURU */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Tenaga Pendidik (Guru)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
              {dataStruktur.guru.map((item, index) => (
                <GuruCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* 4. KEAMANAN */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Keamanan</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {dataStruktur.keamanan.map((item, index) => (
                <GuruCard key={index} {...item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default DaftarStruktur;