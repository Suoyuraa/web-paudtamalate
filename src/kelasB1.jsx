import React from 'react';
import sekolah from "/sekolah.png";
import kepalaskl from "/foto kepala sekolah paud.png";
import ruangan from "/ruangan besar tk.png"
import a1 from "/a1.jpg"

const KelasA1 = () => {
  // Data dummy untuk section "Kegiatan"
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

      const students = [
  { id: 1, nis: "2024001", nama: "Oshei", jenisKelamin: "L", usia: "5 tahun", kelas: "A1" },
  { id: 2, nis: "2024002", nama: "akramul", jenisKelamin: "L", usia: "4 tahun", kelas: "A1" },
  { id: 3, nis: "2024003", nama: "Budi Santoso", jenisKelamin: "L", usia: "5 tahun", kelas: "A1" },
  { id: 4, nis: "2024004", nama: "fem oshei", jenisKelamin: "P", usia: "4 tahun", kelas: "A1" },
  { id: 5, nis: "2024005", nama: "afla Pratama", jenisKelamin: "L", usia: "5 tahun", kelas: "A1" },
  { id: 6, nis: "2024006", nama: "Nur Aisyah", jenisKelamin: "P", usia: "4 tahun", kelas: "A1" },
];
      

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- HERO SECTION --- */}

      {/* SECTION HERO (FOTO GURU) */}
      <div className="relative h-[400px] md:h-[350px] py-[113px] w-full overflow-hidden bg-slate-900">
        {/* Foto Otomatis ke tengah & Menyesuaikan Bentuk */}
        <img 
          src={a1} 
          alt="Guru PAUD" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        {/* Overlay Tulisan */}
        <div className="relative z-10 flex flex-col max-w-7xl px-6 md:px-24 mx-auto justify-center h-full px-8 md:px-24 flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Kelas B1</h1>
          <p className="text-lg mt-2 opacity-90 capitalize">Paud negeri tamalate</p>
        </div>
      </div>

      {/* --- BLUE WRAPPER (Kegiatan & Guru) --- */}
      <section className="bg-[#3b71ca] py-16 px-8 rounded-b-[40px]">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Kegiatan */}


  {/* Judul - Sejajar dengan Card */}
  <div className="text-4xl font-bold mb-10 text-white" >
    Kegiatan Minggu ini
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
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
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
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

  </button>
</div>

          {/* Section Guru */}
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold mb-10">Guru Pengajar</h2>
            <div className="flex justify-center gap-8 flex-wrap">
              {[1, 2].map((guru) => (
                <div key={guru} className="text-center">
                  <div className="w-48 h-64 bg-white rounded-t-full overflow-hidden border-4 border-white shadow-xl">
                    <img src={kepalaskl} alt="Guru" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-white font-bold mt-4">Bu Cahaya M.Pd</p>
                  <p className="text-blue-100 text-sm italic">Guru</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION SISWA --- */}
      <section className="bg-white py-8 px-6">
      <h2 className="font-bold text-gray-800 text-lg mb-4">siswa</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-3 font-medium">No</th>
              <th className="px-4 py-3 font-medium">NIS</th>
              <th className="px-4 py-3 font-medium">Nama</th>
              <th className="px-4 py-3 font-medium">Jenis Kelamin</th>
              <th className="px-4 py-3 font-medium">Usia</th>
              <th className="px-4 py-3 font-medium">Kelas</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr
                key={s.id}
                className={`border-t border-gray-100 hover:bg-blue-50 transition-colors ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-4 py-3 text-gray-600">{i + 1}</td>
                <td className="px-4 py-3 text-gray-600">{s.nis}</td>
                <td className="px-4 py-3 font-medium text-gray-800">{s.nama}</td>
                <td className="px-4 py-3 text-gray-600">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      s.jenisKelamin === "L"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-pink-100 text-pink-700"
                    }`}
                  >
                    {s.jenisKelamin === "L" ? "Laki-laki" : "Perempuan"}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{s.usia}</td>
                <td className="px-4 py-3 text-gray-600">{s.kelas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
      {/* --- FOOTER --- */}
      
    </div>
  );
};

export default KelasA1;