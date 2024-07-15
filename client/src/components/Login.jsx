import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Arriereplan from '../asset/arriereplan.jpg';

// STYLED-COMPONENTS
const BodyLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${Arriereplan});
  background-size: cover;
  background-position: center;
`;

const BlocLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

const SignupLink = styled.p`
  text-align: center;
  margin-top: 20px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:5000/api/login', {
            email,
            password,
        });

        console.log(response.data);
        setError('');
        navigate('/welcome'); // Redirigez vers la page de bienvenue
    } catch (error) {
        setError('Email ou mot de passe incorrect');
        console.error('Error:', error);
    }
};


  return (
    <BodyLogin>
      <BlocLogin>
        <Wrapper onSubmit={handleSubmit}>
          <Titleh2>Log In</Titleh2>
          <Formgroup>
            <Label>Email:</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Formgroup>
          <Formgroup>
            <Label>Password:</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Formgroup>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <SubmitButton type="submit">Log In</SubmitButton>
          <SignupLink>Vous n'avez pas de compte ? <Link to="/signup">Inscrivez-vous ici</Link></SignupLink>
        </Wrapper>
      </BlocLogin>
    </BodyLogin>
  );
};

export default Login;