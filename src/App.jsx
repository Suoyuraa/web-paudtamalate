
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Dasbord from './dasbord';
import Footer from './Footer';
import Struktur from './struktur';
import Visimisi from './visi-misi';



function App() {
  return (
    <>
    
    <Navbar />

    <Routes>
        <Route path="/struktur" element={<Struktur />} />
        <Route path="/" element={<Dasbord />} />
        <Route path="/visimisi" element={<Visimisi />} />
      </Routes>
   <Footer />
  </>
  );
};

export default App;