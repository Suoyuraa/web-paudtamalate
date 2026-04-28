
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Dasbord from './dasbord';
import Footer from './Footer';
import Struktur from './struktur';



function App() {
  return (
    <>
    
    <Navbar />

    <Routes>
        <Route path="/struktur" element={<Struktur />} />
        <Route path="/dasbord" element={<Dasbord />} />

      </Routes>
   <Footer />
  </>
  );
};

export default App;