import React from 'react';
import '../styles/body.css';
import img_acceuil_3 from '../componente/assets/agent_immo_2.jpg';
import img_acceuil from '../componente/assets/agent_immo.jpg';
import img_acceuil_2 from '../componente/assets/apartement_exterieur.jpg';
import img_acceuil_4 from '../componente/assets/maison_exterieur.jpg';
import logoadnimmo_header from '../componente/assets/logoadnimmo.png';
import Imgexpertise from '../componente/assets/img_expertise.jpg';
import Imgrechercheperso from '../componente/assets/Img_recherche_perso.jpg';
import Imgconseils from '../componente/assets/img_conseils.jpg';




const Body = () => {
    return (
    <section>
      <div className="div_logo_titre">
        <p className='titre'>TROUVER VOTRE BONHEUR, C'EST NOTRE METIER </p>
        <img src={logoadnimmo_header} alt="logoimmo" className='logo_immo_header'/>
     </div>

      <div className='div_img_acceuil'>
          
            <img src={img_acceuil} alt="agent_immo" className='img_acceuil'/>
          
            <img src={img_acceuil_2} alt="agent_immo" className='img_acceuil_2'/>
          
            <img src={img_acceuil_3} alt="immeuble" className='img_acceuil_3'/>
          
            <img src={img_acceuil_4} alt="maison" className='img_acceuil_4'/>
          
        </div>


      {/*_______________________________ aventages & services_________________________________ */}

<h2 className='titre_nos_servies'>NOS SERVICES</h2>
<div className='div_anvantages_services'>

  
        
            <img src={Imgexpertise} alt="expertise" className='img_expertise'/>
            <h1 className='titre_expertise'>EXPERTISE</h1>
            <p className='texte_expertise'>notre agence se spécialise dans l'évaluation précise et détaillée de biens immobiliers. Notre équipe d'experts qualifiés offre des services d'expertise professionnelle pour vous aider à comprendre la valeur exacte de votre propriété. Que ce soit pour vendre, acheter ou simplement pour une évaluation, nous sommes là pour fournir des analyses approfondies et des conseils avisés, afin de vous accompagner dans toutes vos décisions immobilières stratégiques. Faites confiance à notre expertise pour vous guider vers le succès dans vos projets immobiliers.</p>

            
          
           
            <img src={Imgrechercheperso} alt="realité virtuel" className='img_recherche_pers'/>
            <h1 className='titre_recherche_perso'>RECHERCHE<br/>PERSONALISEES</h1>
            <p className='texte_recherche_perso'>Notre service de recherche personnalisée vous aide à trouver le bien immobilier idéal, en fonction de vos critères spécifiques. Que vous cherchiez une maison familiale, un appartement moderne en centre-ville, ou un investissement locatif, notre équipe d'experts est à votre écoute. Nous analysons vos besoins en détail, incluant la localisation, le budget, la superficie, et les commodités souhaitées, pour vous proposer une sélection de propriétés qui correspondent parfaitement à vos attentes. Grâce à notre connaissance approfondie du marché et à notre réseau étendu, nous vous garantissons une recherche efficace et ciblée, facilitant ainsi votre processus d'achat .</p>

            <img src={Imgconseils} alt="ordinateur" className='img_conseil'/>
            <h1 className='titre_conseils'>CONSEILS<br/>ACOMPAGNMENT</h1>
            <p className='texte_conseils'>Notre agence immobilière vous offre un accompagnement complet et des conseils personnalisés tout au long de votre projet immobilier.Nous mettons à votre disposition notre expertise du marché pour vous guider dans chaque étape. Nos services incluent l'estimation précise de la valeur des biens, des stratégies de mise en marché efficaces, ainsi que des conseils juridiques et financiers. Nous nous engageons à simplifier vos démarches, à répondre à vos questions et à vous fournir des solutions adaptées à vos besoins, garantissant ainsi une transaction sereine et réussie.</p>
</div>
    </section>
  );
};

export default Body;
