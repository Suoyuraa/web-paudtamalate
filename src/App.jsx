
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Dasbord from './dasbord';
import Footer from './Footer';
import Struktur from './struktur';
import Visimisi from './visi-misi';
import Guru from './Guru';
import KelasA1 from './kelasA1';
import KelasA2 from './kelasA2';
import KelasA3 from './kelasA3';
import KelasB1 from './kelasB1';
import KelasB2 from './kelasB2';
import Fasilitas from './fasilitas';


function App() {
  return (
    <>
    
    <Navbar />

    <Routes>
        <Route path="/struktur" element={<Struktur />} />
        <Route path="/" element={<Dasbord />} />
        <Route path="/visimisi" element={<Visimisi />} />
        <Route path="/Guru" element={<Guru />} />
        <Route path="/kelas/a1" element={<KelasA1 />} />
        <Route path="/kelas/a2" element={<KelasA2 />} />
        <Route path="/kelas/a3" element={<KelasA3 />} />
        <Route path="/kelas/b1" element={<KelasB1 />} />
        <Route path="/kelas/b2" element={<KelasB2 />} />
        <Route path="/fasilitas" element={<Fasilitas />} />

      </Routes>
   <Footer />
  </>
  );
};

export default App;