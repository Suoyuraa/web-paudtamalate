import React from 'react';
import sekolah from '/sekolah.png';
import mainan from '/tempat bermain.png';

const VisiMisi = () => {
  // Ganti path ini dengan lokasi gambar aslimu
  const imgHero = "/path-ke-foto-background.jpg"; 
  const imgPortrait = "/path-ke-foto-sekolah-portrait.jpg";

  return (
    <div className="bg-white min-h-screen pt-28">
      
      {/* 1. HERO SECTION (Header dengan Background) */}
      <div className="relative h-[250px] md:h-[350px] py-[113px] w-full overflow-hidden bg-slate-900">
        <img 
          src={mainan} 
          alt="Background Visi Misi" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-24 flex flex-col justify-center text-white">
          <div className="text-4xl md:text-5xl font-bold">Visi dan Misi</div>
          <p className="text-lg mt-2 opacity-80">Paud Negeri Tamalate</p>
        </div>
      </div>

      {/* 2. KONTEN UTAMA (Dua Kolom) */}
      <div className="max-w-7xl mx-auto py-12 px-6 md:py-20 md:px-24 ">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* KOLOM GAMBAR (Mobile: Atas, Desktop: Kiri) */}
          <div className="w-full md:w-5/12">
            <div className="relative group">
              {/* Efek Bingkai di Belakang Gambar */}
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl -z-10 group-hover:bg-blue-200 transition-colors"></div>
              <img 
                src={sekolah} 
                alt="Gedung Sekolah" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover  object-position aspect-[3/4]"
              />
            </div>
          </div>

          {/* KOLOM TEKS (Visi & Misi) */}
          <div className="w-full md:w-7/12">
            
            {/* Bagian Visi */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-1.5 bg-[#3266CC] rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800">Visi</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed italic">
                "Mewujudkan generasi anak usia dini yang ceria, mandiri, berakhlak baik, 
                kreatif, dan siap melangkah ke jenjang pendidikan selanjutnya."
              </p>
            </section>

            {/* Bagian Misi */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1.5 bg-[#3266CC] rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800">Misi</h2>
              </div>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-[#3266CC] rounded-full flex items-center justify-center font-bold">1</div>
                  <p className="text-gray-600 text-lg">
                    Membentuk anak cerdas melalui pembelajaran yang inovatif dan berpusat pada anak.
                  </p>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-[#3266CC] rounded-full flex items-center justify-center font-bold">2</div>
                  <p className="text-gray-600 text-lg">
                    Membangun lingkungan sekolah yang <span className="font-bold text-blue-600">BAHAGIA</span>, melalui lingkungan belajar yang aman, nyaman dan ceria agar anak merasa Bahagia dan termotivasi untuk belajar.
                  </p>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-[#3266CC] rounded-full flex items-center justify-center font-bold">3</div>
                  <p className="text-gray-600 text-lg">
                    Membentuk anak <span className="font-bold text-blue-600">BERKARAKTER</span> melalui pembiasaan perilaku positif dalam kehidupan sehari-hari serta menerapkan budaya PERMATA (permisi, maaf dan terima kasih).
                  </p>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;