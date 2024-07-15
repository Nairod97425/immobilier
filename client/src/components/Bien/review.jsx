import React, { useEffect, useState } from "react";
import styled from "styled-components";

// COMPOSANTS STYLÉS
const ReviewContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
`;

const Review = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const ReviewAuthor = styled.h3`
  margin: 0 0 5px;
`;

const ReviewText = styled.p`
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background-color: #5a6268;
  }
`;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [username, setUsername] = useState("");
  const [avis, setAvis] = useState("");
  const [rating, setRating] = useState("");
  const [isViewingReviews, setIsViewingReviews] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3000/bien");
        if (!response.ok) {
          throw new Error('Erreur réseau lors de la récupération des avis');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des avis:', error);
      }
    };
  
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newAvis = {
      username,
      avis: avis,
      rating: parseInt(rating),
    };
  
    try {
      const response = await fetch("http://localhost:3000/review", {
        method: "POST",

        body: JSON.stringify(newAvis),
      });
  
      console.log('Response:', response);  // Ajoutez ceci pour déboguer
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Data:', data);  // Ajoutez ceci pour déboguer
  
      setReviews([...reviews, data]);
      setUsername("");
      setAvis("");
      setRating("");
      setIsViewingReviews(true);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'avis:", error);
    }
  };
  
  
  return (
    <ReviewContainer>
      <div>
        <ToggleButton onClick={() => setIsViewingReviews(!isViewingReviews)}>
          {isViewingReviews ? "Écrire un avis" : "Voir les avis"}
        </ToggleButton>
      </div>
      {isViewingReviews ? (
        <>
          <Title>Avis des Utilisateurs</Title>
          {reviews.map((avis) => (
            <Review key={avis.id}>
              <ReviewAuthor>{avis.username}</ReviewAuthor>
              <ReviewText>{avis.review}</ReviewText>
              <p>Note : {avis.rating}/5</p>
            </Review>
          ))}
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Votre nom"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Textarea
            placeholder="Votre avis"
            value={avis}
            onChange={(e) => setAvis(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Note (1-5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            min="1"
            max="5"
          />
          <Button type="submit">Soumettre</Button>
        </Form>
      )}
    </ReviewContainer>
  );
};

export default Reviews;