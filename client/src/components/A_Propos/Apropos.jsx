import React from "react";
import styled from "styled-components";
import ImgGuide from "./assets/century21_student.webp"
import ImgDecouverte from "./assets/century21_velo.webp"
// STYLED6COMPONENTS

const Bodyapropos = styled.div`
    background: #f9f3f3;
    margin: 0;
`
const Bloctitle = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
`
const Titleh1 = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`

const Actuinfo = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`
const Titleh2 = styled.div`
    font-size: 25px;
    margin: 15px 0 10px 50px;
    font-weight: bold;
    
`
const Blocactu1 = styled.div`
    border: solid 1px #585000;
    padding: 10px;
    margin: 10px 15px;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Titleh3 = styled.div`
    color: #847252;
    font-size: 20px;
    font-weight: bold;
`
const Bloclireplus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Buttonlire = styled.button`
    border: none;
    font-size: 17px;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
`
const Blocvoir = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Buttonvoir = styled.button`
    font-size: 20px;
    padding: 10px 10px;
    font-weight: bold;
    background: #f4f4f4;
    border: solid 1.5px #847252;
    border-radius: 5px;
`
const Textrevue = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Revuep = styled.div`
    margin: 10px 50px;
    font-size: 20px;
`
const Blocrevue = styled.div`
    display: flex;
    justify-content: center;
`
const Revueimg = styled.div`
    margin: 15px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`
const Imgtext = styled.div`
    background: #000000ae;
    position: absolute;
    width: 25%;
    height: 30%;
    padding: 20px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
`
const Revuebutton = styled.div`
    background: #beaf87;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 30px;
    margin: 5px 0;
    border: none;
    border-radius: 7px;
    color: white;
`
const Actuinfo2 =styled.div`
    margin: 24px 0 24px 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
`
const Actufrance =styled.div`
    width: 90%;
`
const Blocactu2 = styled.div`
    border: solid 1px #585000;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Blocmetier = styled.div`
    margin: 10px 50px;
`
export default function Apropos() {
    return (
        <Bodyapropos>
            <Bloctitle>
                <Titleh1>A propos de ADN immo</Titleh1>
            </Bloctitle>
            
            {/* L'ACTUALITE */}
            <Titleh2>L'actualité immobilière ADN immo</Titleh2>
            <Actuinfo>
                <Blocactu1>
                    <Titleh3>ADN immo, partanaire officiel de la Fédération Francais de Rugby</Titleh3>
                    <p>Ce partenariat, d’une durée de trois ans reconductibles -avec exclusivité sectorielle-, a vocation à s’étoffer dans le temps, avec une volonté commune de développer des passerelles professionnelles...</p>
                    <Bloclireplus>
                        <Buttonlire>Lire plus</Buttonlire>
                        <Titleh3>13 septembre 2024</Titleh3>
                    </Bloclireplus>
                </Blocactu1>
                <Blocactu1>
                    <Titleh3>ADN immo, partenaire de Foire de Paris</Titleh3>
                    <p>ADN immo, partenaire de Foire de Paris 2024 - plus grand salon d'Europe pour la maison!</p>
                    <Bloclireplus>
                        <Buttonlire>Lire plus</Buttonlire>
                        <Titleh3>13 avril 2024</Titleh3>
                    </Bloclireplus>
                </Blocactu1>
                <Blocactu1>
                    <Titleh3>Audit énergétique obligatoire : êtes-vous concerné ?</Titleh3>
                    <p>La loi « Climat et Résilience » du 22 août 2021 impose dès le 1er avril prochain la réalisation d’un audit énergétique lors de la vente d’une maison ou d’un immeuble détenu par un seul propriétaire.</p>
                    <Bloclireplus>
                        <Buttonlire>Lire plus</Buttonlire>
                        <Titleh3>13 mars 2024</Titleh3>
                    </Bloclireplus>
                </Blocactu1>
                <Blocactu1>
                    <Titleh3>Le parcours de formation ADN immo France reconnu Bac+3/+4 par l’État</Titleh3>
                    <p>Depuis 2019, Century 21 France offre la possibilité de certifier son parcours de formation, donnant accès à un titre RNCP de niveau Bac +3/+4 reconnu par l’Etat.</p>
                    <Bloclireplus>
                        <Buttonlire>Lire plus</Buttonlire>
                        <Titleh3>13 janvier 2024</Titleh3>
                    </Bloclireplus>
                </Blocactu1>
            </Actuinfo>
            <Blocvoir>
                <Buttonvoir>Voir tous les articles</Buttonvoir>
            </Blocvoir>
            {
            /* REVUE DE PRESSE */}
            <Textrevue>
                <Titleh2>La revue de presse</Titleh2>
                <Revuep>Tout au long de l'année, ADN immo communique dans les médias et publie des informations immobilières sur les tendances du marché immobilier. Retrouvez des extraits d'articles de presse ainsi que les communiqués, les conférences de presse et les infographies sur le marché immobilier en France et en région de ADN immo France.</Revuep>
            </Textrevue>
            <Blocrevue>
                <Revueimg>
                    <img src={ImgGuide} alt="img guide" />
                    <Imgtext>
                        <Titleh1>Le guide du logement étudiant</Titleh1>
                        <Revuebutton>Je télécharge le guide</Revuebutton>
                    </Imgtext>
                </Revueimg>
                <Revueimg>
                    <img src={ImgDecouverte} alt="img decouverte" />
                    <Imgtext>
                        <Titleh1>Le marché immobilier de l'ancien:  
                            Que s'est-il passé en 2023 ?</Titleh1>
                        <Revuebutton>Je découvre</Revuebutton>
                    </Imgtext>
                </Revueimg>
            </Blocrevue>
            
            {/* ACTUALITE */}
            <Actuinfo>
                <Blocactu1>
                    <Titleh3>Revue de presse</Titleh3>
                    <p>Ils parlent de nous !</p>
                    <Bloclireplus>
                        <Buttonlire>Lire plus</Buttonlire>
                        <Titleh3>13 juin 2024</Titleh3>
                    </Bloclireplus>
                </Blocactu1>
                <Blocactu1>
                    <Titleh3>ADN immo, n°1 de la relation client pour la 2ème année consécutive</Titleh3>
                    <p>Le Palmarès de la Relation Client que réalise chaque année depuis 26 ans le cabinet Human Consulting Group récompense CENTURY 21 pour la deuxième année consécutive.</p>
                    <Bloclireplus>
                        <Buttonlire>Lire plus</Buttonlire>
                        <Titleh3>13 janvier 2024</Titleh3>
                    </Bloclireplus>
                </Blocactu1>
                <Blocactu1>
                    <Titleh3>Prix immobiliers : Paris distancé par Londres, New York et San Francisco !</Titleh3>
                    <p>Si vous avez 300 000 euros pour acheter un appartement ou une maison dans une grande métropole mondiale, combien de mètres carrés pourrez-vous vous offrir ?</p>
                    <Bloclireplus>
                        <Buttonlire>Lire plus</Buttonlire>
                        <Titleh3>13 mai 2024</Titleh3>
                    </Bloclireplus>
                </Blocactu1>
            </Actuinfo>
            
            {/* ADN immo en france */}
                <Titleh2>ADN immo en france</Titleh2>
            <Actuinfo2>
                <Actufrance>
                    <Titleh3>Découvrez le 1er réseau d'agences immobilières dans le monde.</Titleh3>
                    <Blocactu2>
                        <p>CENTURY 21 fédère en France 960 agences et cabinets qui interviennent sur les métiers de la transaction, de la gestion locative et du syndic de copropriété.</p>
                        <Buttonlire>Lire plus</Buttonlire>
                    </Blocactu2>
                </Actufrance>
                <Actufrance>
                    <Titleh3>Nos engagements</Titleh3>
                    <Blocactu2>
                        <p>Nous sommes fier d'accompagner des milliers de familles chaque années dans la réalisation de leur projet immobilier.Nous somme 7620 personnes a défendre une idée différente de l'immobilier pour...</p>
                        <Buttonlire>Lire plus</Buttonlire>
                    </Blocactu2>
                </Actufrance>
                <Actufrance>
                    <Titleh3>Les sites dédiés</Titleh3>
                    <Blocactu2>
                        <p>ADN immo mets à la disposition des clients vendeur un site web uniquement dédié à la peomotion de leur bien.</p>
                        <Buttonlire>Lire plus</Buttonlire>
                    </Blocactu2>
                </Actufrance>
            </Actuinfo2>
                <Titleh2>Nos métiers</Titleh2>
            <Blocmetier>
                <Buttonlire>La vente de votre bien</Buttonlire>
                <Buttonlire>L'achat de votre logement</Buttonlire>
            </Blocmetier>
        </Bodyapropos>
    );
};