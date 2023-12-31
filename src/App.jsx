import './App.css'
import GalleryIndex from './Pages/Gallery/GalleryIndex/GalleryIndex';
// import Footer from './Components/Footer/Footer'
// import Navbar from './Components/Navbar/Navbar'
import HomeIndex from './Pages/Home/HomeIndex/HomeIndex'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path="gallery" element={<GalleryIndex />} />
          {/* <Route path="navbar" element={<Navbar />} />
          <Route path="footer" element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
