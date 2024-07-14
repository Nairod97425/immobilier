import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/acceuil.jsx';
import Inscription from "./pages/inscription.jsx";
import Connexion from "./pages/connexion.jsx";
import Propriete from './pages/bien.jsx';
import Contact from './pages/contact.jsx';
import A_propos from './pages/a_propos.jsx';




function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/bien" element={<Propriete />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/apropos" element={<A_propos />} />
        </Routes>
      </Router>
    
  );
}

export default App;
