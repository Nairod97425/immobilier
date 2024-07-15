import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Arriereplan from '../asset/arriereplan.jpg';

const Bodyinscrip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${Arriereplan});
  background-size: cover;
  background-position: center;
`;

const Blocinscrip = styled.div`
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


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [inputErrors, setInputErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!username) {
      errors.username = "Le nom d'utilisateur est requis";
    }

    if (!email) {
      errors.email = "L'email est requis";
    } else if (!validateEmail(email)) {
      errors.email = "Format d'email invalide";
    }

    if (!password) {
      errors.password = 'Le mot de passe est requis';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Veuillez confirmer le mot de passe';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    if (!age) {
      errors.age = "L'âge est requis";
    } else if (parseInt(age) < 18) {
      errors.age = 'Vous devez avoir au moins 18 ans pour vous inscrire';
    }

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        email,
        password,
        age,
      });
      console.log(response.data);
      setInputErrors({});
      setSuccess('Inscription réussie ! Vous pouvez maintenant vous connecter.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setError("Erreur lors de l'inscription");
      console.error('Erreur:', error);
    }
  };

  return (
    <Bodyinscrip>
      <Blocinscrip>
        <Wrapper onSubmit={handleSubmit}>
          <Titleh2>Inscription</Titleh2>
          <Formgroup>
            <Label>Nom d'utilisateur :</Label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {inputErrors.username && <ErrorMessage>{inputErrors.username}</ErrorMessage>}
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
            <Label>Mot de passe :</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {inputErrors.password && <ErrorMessage>{inputErrors.password}</ErrorMessage>}
          </Formgroup>
          <Formgroup>
            <Label>Confirmer le mot de passe :</Label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {inputErrors.confirmPassword && <ErrorMessage>{inputErrors.confirmPassword}</ErrorMessage>}
          </Formgroup>
          <Formgroup>
            <Label>Âge :</Label>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            {inputErrors.age && <ErrorMessage>{inputErrors.age}</ErrorMessage>}
          </Formgroup>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          <SubmitButton type="submit">S'inscrire</SubmitButton>
        </Wrapper>
      </Blocinscrip>
    </Bodyinscrip>
  );
};

export default Signup;