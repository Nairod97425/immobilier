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
  password: '210797', // Remplacez par votre mot de passe PostgreSQL (sql)
  port: 5432,
});

app.post('/api/signup', async (req, res) => {
  const { username, email, password, age } = req.body;

  if (!username || !email || !password || !age) {
    return res.status(400).send('Tous les champs sont obligatoires');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const result = await pool.query(
      'INSERT INTO utilisateurs (username, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, email, hashedPassword, age]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error); // Log the error details
    res.status(500).send('Erreur lors de l\'inscription');
  }
});
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email et mot de passe sont requis');
  }

  try {
    const result = await pool.query('SELECT * FROM utilisateurs WHERE email = $1', [email]);
    
    if (result.rows.length === 0) {
      console.error('Utilisateur non trouvé pour l\'email:', email);
      return res.status(401).send('Email ou mot de passe incorrect');
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.error('Mot de passe incorrect pour l\'email:', email);
      return res.status(401).send('Email ou mot de passe incorrect');
    }

    const { password: pwd, ...userData } = user;
    res.status(200).json(userData);
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).send('Erreur lors de la connexion');
  }
});

app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
