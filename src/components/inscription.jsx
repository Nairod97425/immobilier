import React, { useState } from 'react';

function Inscription() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/utilisateurs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nom, prenom })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Inscription réussie :', data);
    } else {
      console.error('Erreur d\'inscription :', data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nom">Nom :</label>
      <input type="text" id="nom" value={nom} onChange={(event) => setNom(event.target.value)} /><br />

      <label htmlFor="prenom">Prénom :</label>
      <input type="text" id="prenom" value={prenom} onChange={(event) => setPrenom(event.target.value)} /><br />

      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default Inscription;
