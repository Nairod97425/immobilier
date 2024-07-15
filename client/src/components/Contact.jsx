import React, { useState } from 'react';
import styled from 'styled-components';
import Arriereplan from '../asset/arriereplan.jpg';

const BodyContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${Arriereplan});
  background-size: cover;
  background-position: center;
`;

const BlocContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Comic Sans MS', cursive;
`;

const Wrapper = styled.form`
  width: 100%;
`;

const Titleh2 = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const Formgroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: -10px;
  margin-bottom: 20px;
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: -10px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: goldenrod;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [inputErrors, setInputErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return re.test(email);
  };

  const validateTelephone = (telephone) => {
    const re = /^\d{10}$/; // 10 chiffres pour un numéro de téléphone français
    return re.test(telephone);
  };

  const validateName = (name) => {
    const re = /^[a-zA-ZÀ-ÿ\s'-]+$/; // Lettres, espaces, tirets et apostrophes
    return re.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!nom) {
      errors.nom = 'Le nom est requis';
    } else if (!validateName(nom)) {
      errors.nom = 'Le nom contient des caractères invalides';
    }

    if (!prenom) {
      errors.prenom = 'Le prénom est requis';
    } else if (!validateName(prenom)) {
      errors.prenom = 'Le prénom contient des caractères invalides';
    }

    if (!telephone) {
      errors.telephone = 'Le numéro de téléphone est requis';
    } else if (!validateTelephone(telephone)) {
      errors.telephone = 'Format de numéro de téléphone invalide';
    }

    if (!email) {
      errors.email = 'L\'email est requis';
    } else if (!validateEmail(email)) {
      errors.email = 'Format d\'email invalide';
    }

    if (!message) {
      errors.message = 'Le message est requis';
    }

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
      return;
    }

    // Envoyer les données du formulaire
    console.log('Form submitted:', { nom, prenom, telephone, email, message });
    setSuccess('Message envoyé avec succès !');
    setInputErrors({});
    setNom('');
    setPrenom('');
    setTelephone('');
    setEmail('');
    setMessage('');
  };

  return (
    <BodyContact>
      <BlocContact>
        <Wrapper onSubmit={handleSubmit}>
          <Titleh2>Contact</Titleh2>
          <Formgroup>
            <Label>Nom :</Label>
            <Input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
            {inputErrors.nom && <ErrorMessage>{inputErrors.nom}</ErrorMessage>}
          </Formgroup>
          <Formgroup>
            <Label>Prénom :</Label>
            <Input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
            {inputErrors.prenom && <ErrorMessage>{inputErrors.prenom}</ErrorMessage>}
          </Formgroup>
          <Formgroup>
            <Label>Numéro de téléphone :</Label>
            <Input
              type="text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
            {inputErrors.telephone && <ErrorMessage>{inputErrors.telephone}</ErrorMessage>}
          </Formgroup>
          <Formgroup>
            <Label>Email :</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {inputErrors.email && <ErrorMessage>{inputErrors.email}</ErrorMessage>}
          </Formgroup>
          <Formgroup>
            <Label>Message :</Label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            {inputErrors.message && <ErrorMessage>{inputErrors.message}</ErrorMessage>}
          </Formgroup>
          {success && <SuccessMessage>{success}</SuccessMessage>}
          <SubmitButton type="submit">Envoyer</SubmitButton>
        </Wrapper>
      </BlocContact>
    </BodyContact>
  );
};

export default Contact;