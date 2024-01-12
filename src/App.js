import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Produit from './pages/Porduit'
import Contact from './pages/Contact'
import Navb from './components/Nav'
import Footer from './components/Footer';



function App() {

  useEffect(() => {
    AOS.init();
  }, []); 

  return (
    <div className="App">
      <Navb />
        <Routes>
          <Route path={"/"} element={<Accueil />} />
          <Route path={"/apropos"} element={<Apropos />} />
          <Route path={"/produit"} element={<Produit />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
