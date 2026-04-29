import { useState } from "react";
import murid from "/murid2.png";

const PER_PAGE = 6;

const facilities = [
  {
    id: 1,
    title: "Ruangan Bermain",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/tempat bermain.png",
  },
  {
    id: 2,
    title: "Taman Bermain",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=400&h=220&fit=crop",
  },
  {
    id: 3,
    title: "Taman Bermain",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1576334377561-78e2c7ba0d41?w=400&h=220&fit=crop",
  },
  {
    id: 4,
    title: "Ruangan Bermain",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=220&fit=crop",
  },
  {
    id: 5,
    title: "Taman Bermain",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=400&h=220&fit=crop",
  },
  {
    id: 6,
    title: "Taman Bermain",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1576334377561-78e2c7ba0d41?w=400&h=220&fit=crop",
  },
  {
    id: 7,
    title: "Perpustakaan",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=220&fit=crop",
  },
  {
    id: 8,
    title: "Aula Serba Guna",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=220&fit=crop",
  },
  {
    id: 9,
    title: "Kantin Sekolah",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=220&fit=crop",
  },
  {
    id: 10,
    title: "Ruang Guru",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=220&fit=crop",
  },
  {
    id: 11,
    title: "Lapangan Olahraga",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1575932444877-5106bee2a599?w=400&h=220&fit=crop",
  },
  {
    id: 12,
    title: "Ruang UKS",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=220&fit=crop",
  },
];

function FacilityCard({ title, desc, img }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base mb-1">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
            page === currentPage
              ? "bg-blue-600 text-white border border-blue-600"
              : "border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        ›
      </button>
    </div>
  );
}

export default function FasilitasGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(facilities.length / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE;
  const visibleItems = facilities.slice(start, start + PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ✅ FIX 1: Hero banner diaktifkan kembali — sebelumnya di-comment out */}
      <div className="relative h-[300px] md:h-[380px] w-full overflow-hidden bg-slate-900">
        <img
          src={murid}
          alt="Fasilitas PAUD"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-24 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Fasilitas</h1>
          <p className="text-lg mt-2 opacity-90 capitalize">Paud Negeri Tamalate</p>
        </div>
      </div>

      {/* ✅ FIX 2: Tambah py-12 agar grid tidak mentok tepat di bawah hero */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <FacilityCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
}
