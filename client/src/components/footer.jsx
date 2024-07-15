import React from 'react';
import './styles/footer.css';
import Logofooter from "../components/assets/logoadnimmo.png";
import Iconeinsta from "../components/assets/icone_instagram.png";
import Iconetwitter from "../components/assets/icone_twitter.png";
import Iconefb from "../components/assets/icone_facebook.png";


function Footer() {
  return (
    <div className='div_footer'>
      
      <img src={Logofooter} alt="logo" className='logo_footer'/> 
      
      
      <div className='resaux_sociaux'>
        <p className='titre_resaux'>Rejoignez-nous</p>
        <img src={Iconeinsta} alt="drfhbdgfc" className='icone_footer'/>
        <img src={Iconetwitter} alt="fbx xfc c" className='icone_footer'/>
        <img src={Iconefb} alt="xfbvbbnbncc" className='icone_footer'/>
        
        <p className='info_agence'> 
          123 Avenue des Lumières <br/>
            75015 Paris<br/>
            0131465219<br/>
            ADNimmo@gmail.com<br/>
            ouvert du : lundi au samedi 9h a 19h30<br/> 
            </p>

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