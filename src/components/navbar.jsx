import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <h1>Connectifly</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link  to="/apropos">A propos</Link>
        <Link to="/connexion">Connexion</Link>
        <Link to="/inscription">Inscription</Link>
      </nav>
    </header>
  );
};

export default Navbar;