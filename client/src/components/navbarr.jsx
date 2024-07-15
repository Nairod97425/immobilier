import React from 'react';
import { Link } from 'react-router-dom';
import logoadnimmo from '../components/assets/logoadnimmo.png';
import './styles/navbarr.css';
import Iconeacceuil from "../components/assets/icone_acceuil.png";
import Iconeinscription from "../components/assets/icone_inscription_2.png";
import Iconeconnexion from "../components/assets/icone_connexion.png";
import Iconeapropos from "../components/assets/icone_a_propos.png";
import Iconecontact from "../components/assets/icone_contact.png";
import Iconebienimmo from "../components/assets/icone_bien_immo.png";

const Navbarr = () => {
  return (
    <div className='div_navbarr'>
      <img src={logoadnimmo} alt="logoimmo" className='logo_immo'/>
      <div className="navbar">
        <img src={Iconeacceuil} alt="icone acceuil" className='icone_acceuil' id='modif_icone_acceuil'/>
        <Link to="/">
          Accueil
        </Link>

        <img src={Iconebienimmo} alt="icone clef" className='icone_acceuil'/> 
        <Link to="/bien">
          Propriétés
        </Link>

        <img src={Iconeinscription} alt="icone inscription" className='icone_acceuil' /> 
        <Link to="/signup">Inscription
        </Link>

        <img src={Iconeconnexion} alt="icone connexion" className='icone_acceuil'/>
        <Link to="/login">
          Connexion
        </Link>

        <img src={Iconeapropos} alt="icone a propos" className='icone_acceuil'/> 
        <Link to="/apropos">À Propos
        </Link>

        <img src={Iconecontact} alt="icone acceuil" className='icone_acceuil' id='icone_contact'/>
        <Link to="/contact">
          Contact
        </Link>
      </div>      
    </div>
  );
};

export default Navbarr;