// import React from 'react'
// import '../styles/footer.css';
// import Logofooter from "../componente/assets/logoadnimmo.png";
// import Iconeinsta from "../componente/assets/icone_instagram.png";
// import Iconetwitter from "../componente/assets/icone_twitter.png";
// import Iconefb from "../componente/assets/icone_facebook.png";

// // map footer
// import '../styles/map.css';



// function footer() {
//   return (
//     <div className='div_footer'>
      
//       <img src={Logofooter} alt="logo" className='logo_footer'/>
//       <div className='resaux_sociaux'>
//         <p className='titre_resaux'>Rejoignez-nous</p>

//         <img src={Iconeinsta} alt="" className='icone_footer'/>
//         <img src={Iconetwitter} alt="" className='icone_footer'/>
//         <img src={Iconefb} alt="" className='icone_footer'/>
//       </div>

//       <div className="map-container">
//         <div className="map">
//           <div className="marker paris">Paris</div>
//           <div className="marker marseille">Marseille</div>
//           <div className="marker lille">Lille</div>
//           <div className="marker amsterdam">Amsterdam</div>
//           <div className="marker lyon">Lyon</div>
//       </div>
//     </div>

//       <hr/>

//       <div className='div_condition'>
//         <p>Mentions légales & CGU</p>
//         <p>Données personnelles</p>
//         <p>Gestionnaire des cookies</p>
//       </div>

//       <p className='copyright'>Copyright © 2024 ADN immo Tous droits réservés.</p>

//     </div>
//   );
// }


// export default footer;

import React, { useEffect } from 'react';
import '../styles/footer.css';
import Logofooter from "../componente/assets/logoadnimmo.png";
import Iconeinsta from "../componente/assets/icone_instagram.png";
import Iconetwitter from "../componente/assets/icone_twitter.png";
import Iconefb from "../componente/assets/icone_facebook.png";
import L from 'leaflet'; // Importer Leaflet
import 'leaflet/dist/leaflet.css'; // Importer les styles CSS de Leaflet
import '../styles/map.css';
// Définir les images de marqueurs pour Leaflet (nécessaire en raison de problèmes de chemin avec Leaflet)
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Corriger le chemin des images de marqueurs pour Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});



function Footer() {
  useEffect(() => {
    // Créer une carte Leaflet
    const map = L.map('map').setView([48.8566, 2.3522], 5); // Coordonnées du centre de la carte et niveau de zoom initial

    // Ajouter un fond de carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Ajouter des marqueurs pour chaque ville
    const cities = [
      { name: 'Paris', coordinates: [48.8566, 2.3522] },
      { name: 'Marseille', coordinates: [43.2965, 5.3698] },
      { name: 'Lille', coordinates: [50.6292, 3.0573] },
      { name: 'Amsterdam', coordinates: [52.3676, 4.9041] },
      { name: 'Lyon', coordinates: [45.75, 4.85] }
    ];

    cities.forEach(city => {
      L.marker(city.coordinates).addTo(map).bindPopup(city.name);
    });

    return () => {
      // Nettoyer la carte lors du démontage du composant
      map.remove();
    };
  }, []);

  return (
    <div className='div_footer'>
      
      <img src={Logofooter} alt="logo" className='logo_footer'/> 
      <div id="map" className="map-container"></div>
      
      <div className='resaux_sociaux'>
        <p className='titre_resaux'>Rejoignez-nous</p>
        <img src={Iconeinsta} alt="" className='icone_footer'/>
        <img src={Iconetwitter} alt="" className='icone_footer'/>
        <img src={Iconefb} alt="" className='icone_footer'/>
        
      </div>

     

      <hr/>

      <div className='div_condition'>
        <p>Mentions légales & CGU</p>
        <p>Données personnelles</p>
        <p>Gestionnaire des cookies</p>
      </div>

      <p className='copyright'>Copyright © 2024 ADN immo Tous droits réservés.</p>
    </div>
  );
}

export default Footer;



