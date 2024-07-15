import React from 'react';
import logoadnimmo from '../componente/assets/logoadnimmo.png';
import '../styles/navbarr.css';
import Iconeacceuil from "../componente/assets/icone_acceuil.png";
import Iconeinscription from "../componente/assets/icone_inscription.png";
import Iconeconnexion from "../componente/assets/icone_connexion.png";
import Iconeapropos from "../componente/assets/icone_a_propos.png";
import Iconecontact from "../componente/assets/icone_contact.png";
import Iconebienimmo from "../componente/assets/icone_bien_immo.png"





const Navbarr = () => {
    return (
     <div className='div_navbarr'>
        <img src={logoadnimmo} alt="logoimmo" className='logo_immo'/>
          <nav>
            <div class="navbar">
              
             <img src={Iconeacceuil} alt="icone acceuil" className='icone_acceuil' id='modif_icone_acceuil'/>
              <a href=''><button>Accueil</button></a>
             

              <img src={Iconebienimmo} alt="icone clef" className='icone_acceuil'/> 
              <button>Propriétés</button>

              <img src={Iconeinscription} alt="icone inscription" className='icone_acceuil' /> 
              <button>inscription</button>

              <img src={Iconeconnexion} alt="icone connexion" className='icone_acceuil'/>
              <button>connexion</button>

              <img src={Iconeapropos} alt="icone a propos" className='icone_acceuil'/> 
              <button>À Propos</button>

              <img src={Iconecontact} alt="icone acceuil" className='icone_acceuil'id='icone_contact'/>
              <button>Contact</button>
            </div>
        </nav>
      </div>
    );
  };
  
  export default Navbarr;

