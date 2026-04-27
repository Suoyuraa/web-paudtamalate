import { act, useState } from "react";
import sekolah from "/sekolah.png";
import kepalaskl from "/foto kepala sekolah paud.png";
import ruangan from "/ruangan besar tk.png"
import Navbar from './Navbar';


const Utama = () => {

const data = [
  {
    title: "Streamlining your design process today.",
    desc: "Fostering seamless collaboration among Developers and IT Operations.",
    img: [ruangan],
    tanggal : "20 maret 2026",
  },
  {
    title: "Improve team productivity",
    desc: "Boost workflow with better communication tools.",
    img: "https://picsum.photos/300/200?2",
    tanggal : "14 april 2026"

  },
  {
    title: "Modern UI Design",
    desc: "Create beautiful and responsive interfaces.",
    img: "https://picsum.photos/300/200?3",
    tanggal : "18 mei 2026",
  },
  {
    title: "Better Development Flow",
    desc: "Optimize your coding workflow efficiently.",
    img: "https://picsum.photos/300/200?4",
    tanggal : "29 Juni 2026",
  },
  {
    title: "Creative Solutions",
    desc: "Solve problems with innovative ideas.",
    img: "https://picsum.photos/300/200?5",
    tanggal : "30 Juli 2026",
  },
  {
    title: "Future Technology",
    desc: "Prepare for the next generation of tech.",
    img: "https://picsum.photos/300/200?6",
    tanggal : "19 Sesember 2026",
  },
];

  return (
    <>
    
    <Navbar />

    {/* isi halaman */}
    <section className="w-full bg-[#3266CC] pt-[130px] pb-14 rounded-[20px]">
      
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
             <h1 className="text-white text-3xl md:text-5xl font-bold max-w-lg" >
                Rumah cerdas ceria dan berkarakter
             </h1>
             <button className="mt-8 bg-[#3b82f6] text-white w-fit px-10 py-3 rounded-full font-bold" >
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
      <div className="text-xl text-white font-bold" >Cahaya M.pd</div>
      <p className="text-white" >Kepala Sekolah Paud Negeri Tamalate</p>
    </div>

    {/* KANAN: JUDUL + TEKS */}
    <div className="md:w-2/3 text-white">
      {/* Judul ditaruh di sini agar di desktop dia di samping foto */}
      {/* text-center di mobile, text-left di desktop */}
      <div className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left uppercase tracking-wide" >
        Sambutan Kepala Sekolah
      </div>

      <div className="text-justify space-y-4">
        <p >
        Selamat datang di website resmi PAUD Negeri Tamalate. Kami hadir sebagai jendela informasi bagi orang tua dan masyarakat untuk mengenal lebih dekat lingkungan belajar kami. Masa usia dini adalah masa emas (Golden Age) yang sangat krusial, dan kami berkomitmen untuk mendampingi tumbuh kembang anak dengan penuh kasih sayang, keceriaan, dan dedikasi tinggi.
        </p>
        <p >
        Di PAUD Negeri Tamalate, kami menerapkan metode belajar sambil bermain yang dirancang untuk menggali potensi unik setiap anak. Fokus kami bukan hanya pada kecerdasan kognitif, tetapi juga pada pembentukan karakter, kemandirian, dan penanaman nilai-nilai moral sejak dini. Kami ingin memastikan setiap siswa merasa aman dan bahagia dalam mengeksplorasi dunia di sekitar mereka.
        </p>
        <p >
        Pendidikan yang berhasil adalah hasil sinergi yang kuat antara sekolah, orang tua, dan masyarakat. Melalui platform ini, kami berharap komunikasi dapat terjalin dengan lebih baik demi masa depan putra-putri kita. Terima kasih atas kepercayaan Anda telah menitipkan pendidikan buah hati tercinta kepada kami. Mari bersama mencetak generasi yang cerdas, ceria, dan berkarakter.
        </p>
      </div>
    </div>

  </div>
</div>

    </section>
    

    <div className="bg-white w-full pb-100">

<div className="max-w-screen-xl mx-auto py-10 px-6"> 
  {/* Judul - Sejajar dengan Card */}
  <div className="text-4xl font-bold mb-10" >
    Kegiatan sekolah
  </div>

{/* CARD CONTAINER */}
<div 
  className="scroll-area flex gap-6 overflow-x-auto pb-4 no-scrollbar" 
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
>
  {/* CSS Inline untuk menyembunyikan scrollbar */}
  <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

  {data.map((item, index) => (
    <div
      key={index}
      /* overflow-hidden penting agar gambar tidak keluar dari sudut rounded kartu */
      className="min-w-[380px] shadow-90  bg-white border border-white rounded-xl shadow-lg flex flex-col overflow-hidden"
    >
      {/* GAMBAR: Dibuat full tanpa padding, sudut atas melengkung */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-52 object-cover rounded-t-xl"
      />

      {/* AREA KONTEN: Di sinilah padding p-6 diberikan agar tulisan tidak menempel */}
      <div className="p-6 flex flex-col flex-1">
        
        <h5 className="mb-2 text-xl font-semibold">
          {item.title}
        </h5>

        {/* DESKRIPSI: Dibatasi maksimal 2 baris dengan line-clamp-2 */}
        <p className="mb-4 text-gray-600 text-sm line-clamp-2">
          {item.desc}
        </p>

        {/* TANGGAL */}
        <p className="mb-6 font-bold text-gray-500 text-xs uppercase tracking-wider">
          {item.tanggal}
        </p>
        
        {/* BUTTON: mt-auto memastikan tombol selalu berada di paling bawah kartu */}
        <div className="mt-auto">
          <button className="inline-flex w-full items-center justify-center text-sm px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Read more
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

  {/* TOMBOL NAVIGASI (KIRI & KANAN) */}
{/* TOMBOL NAVIGASI (DI LUAR CONTAINER SCROLL) */}
<div className="flex justify-end gap-3 mt-6">
  <button
    onClick={() => {
      document.querySelector(".scroll-area").scrollBy({
        left: -404,
        behavior: "smooth",
      });
    }}
    className="w-12 h-12 flex items-center justify-center bg-white border border-black text-blue-500 rounded-full hover:bg-gray-50 transition-colors"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  </button>
  
  <button
    onClick={() => {
      document.querySelector(".scroll-area").scrollBy({
        left: 404, 
        behavior: "smooth",
      });
    }}
    className="w-12 h-12 flex items-center justify-center bg-white  text-blue-500 border border-black rounded-full hover:bg-gray-50 transition-colors shadow-md"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  </button>
</div>
</div>
    </div>
    
  </>
  );
};

export default Utama;