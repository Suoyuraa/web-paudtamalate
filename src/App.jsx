
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Dasbord from './dasbord';
import Footer from './Footer';
import Struktur from './struktur';
import Visimisi from './visi-misi';
import Guru from './Guru';
import Kegiatan from './kegiatan';
import DetailKegiatan from './halaman';
import Fasilitas from './fasilitas'
import Kelas from './kelas'



function App() {
  return (
    <>
    
    <Navbar />

    <Routes>
        <Route path="/struktur" element={<Struktur />} />
        <Route path="/" element={<Dasbord />} />
        <Route path="/visimisi" element={<Visimisi />} />
        <Route path="/Guru" element={<Guru />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/Detailkegiatan" element={<DetailKegiatan/>} />
        <Route path="/Fasilitas" element={<Fasilitas />} />
        <Route path="/Kelas" element={<Kelas />} />
      </Routes>
   <Footer />
  </>
  );
};

export default App;