require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: false
});

app.get('/bien', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM avis');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Erreur lors de la récupération des avis:', err);
    res.status(500).json({ error: 'Erreur lors de la récupération des avis' });
  }
});

app.post('/bien', async (req, res) => {
  const { username, avis, rating } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO avis (username, review, rating) VALUES ($1, $2, $3) RETURNING *',
      [username, avis, rating]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erreur lors de l\'ajout de l\'avis:', err);
    res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'avis' });
  }
});

app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}`);
});
