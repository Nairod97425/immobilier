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

import React from 'react';
import '../styles/footer.css';
import Logofooter from "../componente/assets/logoadnimmo.png";
import Iconeinsta from "../componente/assets/icone_instagram.png";
import Iconetwitter from "../componente/assets/icone_twitter.png";
import Iconefb from "../componente/assets/icone_facebook.png";


function Footer() {
  return (
    <div className='div_footer'>
      
      <img src={Logofooter} alt="logo" className='logo_footer'/> 
      
      
      <div className='resaux_sociaux'>
        <p className='titre_resaux'>Rejoignez-nous</p>
        <img src={Iconeinsta} alt="drfhbdgfc" className='icone_footer'/>
        <img src={Iconetwitter} alt="fbx xfc c" className='icone_footer'/>
        <img src={Iconefb} alt="xfbvbbnbncc" className='icone_footer'/>
        <p className='condition'> 
            À propos de nous<br/>
            Nos services<br/>
            Propriétés à vendre<br/>
            Propriétés à louer<br/>
            Contact<br/>
            Blog ou actualités<br/>
        </p>
      </div>

     <div id="map" className="map-container"></div>

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



