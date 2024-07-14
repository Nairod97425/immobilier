import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav";
import Apropos from "./components/A_Propos/Apropos"
// import Home from "./components/Accueil"; // Update this line
// import Connexion from "./components/Connexion"; // Update this line
// import Inscription from "./components/Inscription/Inscription"; // Update this line
import Bien from "./components/Bien/bien";
// import Profil from "./components/Profil";
// import Footer from "./components/Footer";
// import ContactProfil from "./components/ContactPro";
// import NavbarProfil from "./components/NavBarProfil";

export default function App() {
  return (
    <Router>
      <>
        <Routes>
          {/* <Route path="/" element={<><Nav /><Home /></>} /> */}
          <Route path="/bien" element={<>{/* <Nav /> */ }<Bien /></>} />
          {/* <Route path="/connexion" element={<><Nav /><Connexion /></>} />  */}
          {/* <Route path="/inscription" element={<><Nav /><Inscription /></>} />  */}
          <Route path="/apropos" element={<>{/* <Nav /> */ }<Apropos /></>} /> 
          {/* <Route path="/profil" element={<><NavbarProfil /><Profil /></>} />
          <Route path="/contact" element={<><NavbarProfil /><ContactProfil /></>} /> */}
        </Routes>
        {/* <Footer /> */}
      </>
    </Router>
  );
};
