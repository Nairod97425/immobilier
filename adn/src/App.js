import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/acceuil.jsx';
import Signup from "./pages/inscription.jsx";
import Connexion from "./pages/connexion.jsx";
import Propriete from './pages/proprietes.jsx';
import Contact from './pages/contact.jsx';
import A_propos from './pages/a_propos.jsx';




function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/proprietes" element={<Propriete />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/a_propos" element={<A_propos />} />
        </Routes>
      </Router>
    
  );
}

export default App;
