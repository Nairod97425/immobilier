const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Configurer la connexion à la base de données PostgreSQL
const pool = new Pool({
  user: 'postgres', // Remplacez par votre nom d'utilisateur PostgreSQL
  host: 'localhost',
  database: 'inscription_db',
  password: '210797', // Remplacez par votre mot de passe PostgreSQL
  port: 5432,
});

app.post('/api/signup', async (req, res) => {
  const { username, email, password, age } = req.body;

  if (!username || !email || !password || !age) {
    console.error('Champs manquants', { username, email, password, age });
    return res.status(400).send('Tous les champs sont obligatoires');
  }

  try {
    // Hacher le mot de passe avec bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); // 10 est le coût du hachage

    // Insérer l'utilisateur dans la base de données avec le mot de passe haché
    const result = await pool.query(
      'INSERT INTO utilisateurs (username, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, email, hashedPassword, age]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    res.status(500).send('Erreur lors de l\'inscription');
  }
});

app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
