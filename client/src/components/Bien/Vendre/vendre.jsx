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
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20%;
  width: 60%;
  background: white;
  border-radius: 5px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
`

const Label = styled.label`
  font-weight: bold;
  font-size: 18px;
`
const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 2px;
  background: #f9f3f3;
`
const Select = styled.select`
  width: 55%;
  height: 30px;
  border: none;
  border-radius: 2px;
`

const TextArea = styled.textarea`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  height: 150px;
  width: 70%;
  border: none;
  background: #f9f3f3;;
`

const Button = styled.button`
  background-color: #f9f3f3;
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
          <Label htmlFor="name">Nom</Label>
          <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <Label htmlFor="email">E-mail</Label>
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Label htmlFor="phone">Téléphone</Label>
          <Input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <Label htmlFor="propertyType">Type de bien</Label>
          <Select id="propertyType" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
            <option value="">-- Choisir un type --</option>
            <option value="appartement">Appartement</option>
            <option value="maison">Maison</option>
            <option value="parking">Parking</option>
            <option value="terrain">Terrain</option>
            <option value="immeuble">Immeuble</option>
          </Select>
          <Label htmlFor="adrasseBien">Adresse du bien à estimer</Label>
          <Input type="text" id="adresseBien" value={adresseBien} onChange={(e) => setAdressebien(e.target.value)} />
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button type="submit">Envoyer</Button>
        </Form>
      </FormContainer>
    </BodyVendre>
  );
}
