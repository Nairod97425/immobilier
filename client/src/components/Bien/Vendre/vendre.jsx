import React, { useState } from "react";
import styled from "styled-components";

//styled.component
const BodyVendre = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`
const H2 = styled.div`
  font-size: 25px;
  font-weight: bold;  
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
`

const TextArea = styled.textarea`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
`

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1rem;
  cursor: pointer;
`

export default function Vendrebien() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [adresseBien, setAdressebien] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traiter les données du formulaire ici, par exemple en les envoyant à un serveur
    console.log("Nom :", name);
    console.log("E-mail :", email);
    console.log("Téléphone :", phone);
    console.log("Message :", message);
    console.log("Adresse du bien :", adresseBien);
  };

  return (
    <BodyVendre>
      <H2>Les avantages de vendre et estimer un bien immobilier par ADN immo</H2>
      <div>
        <h3>Le meilleur prix pour votre bien grâce à l’estimation immobilière</h3>
        <p>Le Réseau ADN immo a mis au point une méthode d’estimation immobilière rigoureuse basée sur une connaissance précise du marché immobilier local, l’Analyse Comparative de Marché. Estimé au meilleur et juste prix, votre bien trouve ainsi un acquéreur dans les délais fixés. Cette méthode est exclusive aux professionnels ADN immo</p>
      </div>

      <FormContainer>
        <h2>Je contacte mon agence ADN immo</h2>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom</label>
          <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">E-mail</label>
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="phone">Téléphone</label>
          <Input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor="propertyType">Type de bien</label>
          <select id="propertyType" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
            <option value="">-- Choisir un type --</option>
            <option value="appartement">Appartement</option>
            <option value="maison">Maison</option>
            <option value="parking">Parking</option>
            <option value="terrain">Terrain</option>
            <option value="immeuble">Immeuble</option>
          </select>
          <label htmlFor="adrasseBien">Adresse du bien à estimer</label>
          <Input type="text" id="adresseBien" value={adresseBien} onChange={(e) => setAdressebien(e.target.value)} />
          <label htmlFor="message">Message</label>
          <TextArea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button type="submit">Envoyer</Button>
        </Form>
      </FormContainer>
    </BodyVendre>
  );
}
