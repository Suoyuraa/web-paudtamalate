const GuruCard = ({ foto, nama, gelar, jabatan }) => {
  return (
    <div className="w-full max-w-[16rem] md:max-w-[18rem] bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="h-72 w-full bg-gray-200">
        <img 
          src={foto} 
          alt={nama} 
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-5 text-center">
        <h4 className="text-lg font-bold text-gray-800 leading-tight mb-1">
          {nama}{gelar ? `, ${gelar}` : ""}
        </h4>
        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
          {jabatan}
        </p>
      </div>
    </div>
  );
};

const DaftarStruktur = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION 1: KEPALA SEKOLAH --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 inline-block border-b-4 border-blue-600 pb-2">
            Pimpinan Sekolah
          </h2>
          <div className="flex justify-center">
            <GuruCard 
              nama="Nama Kepala Sekolah" 
              gelar="S.Pd., M.Pd" 
              jabatan="Kepala Sekolah" 
              foto="/path-foto.png" 
            />
          </div>
        </div>

        {/* --- SECTION 2: TENAGA KEPENDIDIKAN (Admin, Sarpras, Bendahara) --- */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Tenaga Kependidikan</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <GuruCard nama="Nama Admin" jabatan="Administrasi" foto="/p.png" />
            <GuruCard nama="Nama Sarpras" jabatan="Sarana Prasarana" foto="/p.png" />
            <GuruCard nama="Nama Bendahara" jabatan="Bendahara" foto="/p.png" />
          </div>
        </div>

        {/* --- SECTION 3: GURU (10 Orang) --- */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Tenaga Pendidik (Guru)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {/* Kamu bisa menduplikasi ini sampai 10 orang */}
            {[...Array(10)].map((_, i) => (
              <GuruCard 
                key={i}
                nama={`Nama Guru ${i + 1}`} 
                gelar="S.Pd" 
                jabatan="Guru Kelas" 
                foto="/p.png" 
              />
            ))}
          </div>
        </div>

        {/* --- SECTION 4: KEAMANAN --- */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Keamanan</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <GuruCard nama="Nama Satpam 1" jabatan="Satpam" foto="/p.png" />
            <GuruCard nama="Nama Satpam 2" jabatan="Satpam" foto="/p.png" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DaftarStruktur;