// import React from 'react';
// import logoadnimmo from '../componente/assets/logoadnimmo.png';
// import '../styles/navbarr.css';
// import Iconeacceuil from "../componente/assets/icone_acceuil.png";
// import Iconeinscription from "../componente/assets/icone_inscription.png";
// import Iconeconnexion from "../componente/assets/icone_connexion.png";
// import Iconeapropos from "../componente/assets/icone_a_propos.png";
// import Iconecontact from "../componente/assets/icone_contact.png";
// import Iconebienimmo from "../componente/assets/icone_bien_immo.png"





// const Navbarr = () => {
//     return (
//      <div className='div_navbarr'>
//         <img src={logoadnimmo} alt="logoimmo" className='logo_immo'/>
//           <nav>
//             <div class="navbar">
              
//              <img src={Iconeacceuil} alt="icone acceuil" className='icone_acceuil' id='modif_icone_acceuil'/>
//               <a href=''><button>Accueil</button></a>
             

//               <img src={Iconebienimmo} alt="icone clef" className='icone_acceuil'/> 
//               <button>Propriétés</button>

//               <img src={Iconeinscription} alt="icone inscription" className='icone_acceuil' /> 
//               <button>inscription</button>

//               <img src={Iconeconnexion} alt="icone connexion" className='icone_acceuil'/>
//               <button>connexion</button>

//               <img src={Iconeapropos} alt="icone a propos" className='icone_acceuil'/> 
//               <button>À Propos</button>

//               <img src={Iconecontact} alt="icone acceuil" className='icone_acceuil'id='icone_contact'/>
//               <button>Contact</button>
//             </div>
//         </nav>
//       </div>
//     );
//   };
  
//   export default Navbarr;



// import React, { useState } from 'react';
// import logoadnimmo from '../componente/assets/logoadnimmo.png';
// import '../styles/navbarr.css';
// import Iconeacceuil from "../componente/assets/icone_acceuil.png";
// import Iconeinscription from "../componente/assets/icone_inscription.png";
// import Iconeconnexion from "../componente/assets/icone_connexion.png";
// import Iconeapropos from "../componente/assets/icone_a_propos.png";
// import Iconecontact from "../componente/assets/icone_contact.png";
// import Iconebienimmo from "../componente/assets/icone_bien_immo.png";

// const Navbarr = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className='div_navbarr'>
//       <div className='burger' onClick={toggleMenu}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//       <img src={logoadnimmo} alt="logoimmo" className='logo_immo' />
      
//       <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
//         <div className="navbar">
//           <a href="#"><img src={Iconeacceuil} alt="icone acceuil" className='icone_acceuil' id='modif_icone_acceuil' /><button>Accueil</button></a>
//           <a href="#"><img src={Iconebienimmo} alt="icone clef" className='icone_acceuil' /><button>Propriétés</button></a>
//           <a href="#"><img src={Iconeinscription} alt="icone inscription" className='icone_acceuil' /><button>inscription</button></a>
//           <a href="#"><img src={Iconeconnexion} alt="icone connexion" className='icone_acceuil' /><button>connexion</button></a>
//           <a href="#"><img src={Iconeapropos} alt="icone a propos" className='icone_acceuil' /><button>À Propos</button></a>
//           <a href="#"><img src={Iconecontact} alt="icone acceuil" className='icone_acceuil' id='icone_contact' /><button>Contact</button></a>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbarr;



import React, { useState } from 'react';
import logoadnimmo from '../componente/assets/logoadnimmo.png';
import '../styles/navbarr.css';
import Iconeacceuil from "../componente/assets/icone_acceuil.png";
import Iconeinscription from "../componente/assets/icone_inscription.png";
import Iconeconnexion from "../componente/assets/icone_connexion.png";
import Iconeapropos from "../componente/assets/icone_a_propos.png";
import Iconecontact from "../componente/assets/icone_contact.png";
import Iconebienimmo from "../componente/assets/icone_bien_immo.png";

const Navbarr = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='div_navbarr'>
      <div className='burger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={logoadnimmo} alt="logoimmo" className='logo_immo' />
      
      <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <div className="navbar">
          <a href="#"><img src={Iconeacceuil} alt="icone acceuil" className='icone_acceuil' id='modif_icone_acceuil' /><button>Accueil</button></a>
          <a href="#"><img src={Iconebienimmo} alt="icone clef" className='icone_acceuil' /><button>Propriétés</button></a>
          <a href="#"><img src={Iconeinscription} alt="icone inscription" className='icone_acceuil' /><button>inscription</button></a>
          <a href="#"><img src={Iconeconnexion} alt="icone connexion" className='icone_acceuil' /><button>connexion</button></a>
          <a href="#"><img src={Iconeapropos} alt="icone a propos" className='icone_acceuil' /><button>À Propos</button></a>
          <a href="#"><img src={Iconecontact} alt="icone acceuil" className='icone_acceuil' id='icone_contact' /><button>Contact</button></a>
        </div>
      </nav>
    </div>
  );
};

export default Navbarr;


