import { useState } from "react";
import guru from "/sekolah.png";
import ruangan from "/ruangan besar tk.png";
import guru1 from "/foto kepala sekolah paud.png"; // Ganti dengan path foto guru kamu
import guru2 from "/foto kepala sekolah paud.png"; // Ganti dengan path foto guru kamu

const Dasbord = () => {
  const dataKegiatan = [
    {
      title: "Kegiatan Mewarnai",
      desc: "Mengasah kreativitas siswa melalui media warna.",
      img: ruangan,
      tanggal: "20 Maret 2026",
    },
    {
      title: "Upacara Bendera",
      desc: "Latihan kedisiplinan sejak dini setiap senin pagi.",
      img: "https://picsum.photos/300/200?2",
      tanggal: "14 April 2026",
    },
    {
      title: "Bermain Bersama",
      desc: "Interaksi sosial antar siswa di taman bermain.",
      img: "https://picsum.photos/300/200?3",
      tanggal: "18 Mei 2026",
    },
    {
      title: "Pentas Seni",
      desc: "Menampilkan bakat anak dalam menari dan bernyanyi.",
      img: "https://picsum.photos/300/200?4",
      tanggal: "29 Juni 2026",
    },
    {
        title: "Upacara Bendera",
        desc: "Latihan kedisiplinan sejak dini setiap senin pagi.",
        img: "https://picsum.photos/300/200?2",
        tanggal: "14 April 2026",
      },
  ];

  const dataSiswa = [
    { nama: "Ahmad Fauzi", nis: "12345678" },
    { nama: "Siti Aminah", nis: "12345679" },
    { nama: "Budi Santoso", nis: "12345680" },
    { nama: "Lestari Putri", nis: "12345681" },
    { nama: "Rian Hidayat", nis: "12345682" },
    { nama: "Dewi Sartika", nis: "12345683" },
    { nama: "Andi Wijaya", nis: "12345684" },
    { nama: "Fatimah Az-Zahra", nis: "12345685" },
    { nama: "Eko Prasetyo", nis: "12345686" },
    { nama: "Maya Indah", nis: "12345687" },
    { nama: "Hendra Kurnia", nis: "12345688" },
    { nama: "Gita Permata", nis: "12345689" },
    { nama: "Ahmad Fauzi", nis: "12345678" },
    { nama: "Siti Aminah", nis: "12345679" },
    { nama: "Budi Santoso", nis: "12345680" },
    { nama: "Lestari Putri", nis: "12345681" },
    { nama: "Rian Hidayat", nis: "12345682" },
    { nama: "Dewi Sartika", nis: "12345683" },
    { nama: "Andi Wijaya", nis: "12345684" },
    { nama: "Fatimah Az-Zahra", nis: "12345685" },
    { nama: "Eko Prasetyo", nis: "12345686" },
    { nama: "Maya Indah", nis: "12345687" },
    { nama: "Hendra Kurnia", nis: "12345688" },
    { nama: "Gita Permata", nis: "12345689" },
  ];

  return (
    <>
        <div className="bg-white w-full min-h-screen pt-[112px] pb-10">
      {/* SECTION HERO */}
      <div className="relative h-[400px] md:h-[350px] w-full overflow-hidden bg-slate-900">
        <img 
          src={guru} 
          alt="Guru PAUD" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="relative z-10 max-w-7xl px-6 md:px-24 mx-auto flex flex-col justify-center h-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Kelas A1</h1>
          <p className="text-lg mt-2 opacity-90 capitalize">Paud negeri tamalate</p>
        </div>
      </div>
      {/* SECTION 1: HERO & KEGIATAN (BACKGROUND BIRU) */}
      <section className="w-full bg-[#3266CC] pt-[50px] pb-20 rounded-b-[40px]">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Hero Banner */}
         
          {/* Slider Kegiatan (Langsung di Bagian Atas) */}
          <h2 className="text-white text-3xl font-bold mb-8 ">Kegiatan Minggu Ini</h2>
          <div className="scroll-area flex gap-6 overflow-x-auto pb-6 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            {dataKegiatan.map((item, index) => (
              <div key={index} className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl shadow-xl overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h5 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h5>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.desc}</p>
                  <p className="text-gray-400 text-xs font-bold  mb-4">{item.tanggal}</p>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">Lihat Selengkapnya</button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigasi Slider */}
          <div className="flex justify-end gap-3 mt-4">
            <button onClick={() => document.querySelector(".scroll-area").scrollBy({ left: -370, behavior: "smooth" })} className="p-3 bg-white rounded-full shadow-md text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button onClick={() => document.querySelector(".scroll-area").scrollBy({ left: 370, behavior: "smooth" })} className="p-3 bg-white rounded-full shadow-md text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>

          {/* SECTION GURU (2 Orang Saja) */}
          <div className="mt-20">
            <h2 className="text-white text-center text-3xl font-bold mb-10 ">Guru Pengajar</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              <div className="text-center group">
                <img src={guru1} alt="Guru" className="w-72 h-96 object-cover rounded-tl-[100px] rounded-br-[10px] bg-white shadow-lg mb-4" />
                <div className="mt-4 text-white font-bold text-lg">Bu Cahaya M.Pd</div>
                <div className="text-blue-200 text-sm  font-bold">Guru Kelas A</div>
              </div>
              <div className="text-center group">
                <img src={guru2} alt="Guru" className="w-72 h-96 object-cover rounded-tl-[100px] rounded-br-[10px] bg-white shadow-lg mb-4" />
                <div className="mt-4 text-white font-bold text-lg">Bu Cahaya M.Pd</div>
                <div className="text-blue-200 text-sm  font-bold">Guru Kelas B</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SISWA (KOTAK KECIL - BANYAK KOLOM) */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 ">Siswa</h2>
          
          {/* Grid dibuat 4 kolom di desktop agar tidak terlalu besar */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dataSiswa.map((siswa, index) => (
              <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 transition">
                <div className="text-base font-bold text-gray-800  line-clamp-1">{siswa.nama}</div>
                <div className="text-gray-500 text-xs font-semibold">NIS: {siswa.nis}</div>
              </div>
            ))}
          </div>

        
        </div>
      </div>
      </div>
    </>
  );
};

export default Dasbord;