const express = require('express');
const pg = require('pg');

const app = express();

const { Pool } = require('pg');

const dbConfig = {
  host: '127.0.0.1',
  dbname: 'postgres',
  user: 'postgres',
  password: '270989',
  connect_timeout: 10,
  sslmode: 'prefer',
  port: 5432,
};

const pool = new Pool(dbConfig);

try {
  pool.query('SELECT 1');
  console.log('Connected to database!');
} catch (err) {
  console.error('Error connecting to database:', err);
}

app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;
  const query = {
    text: `SELECT nom, prenom, adresse, adresse_mail, mot_de_passe
           FROM utilisateurs
           WHERE nom = $1 AND mot_de_passe = $2`,
    values: [username, password],
  };

  pool.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error authenticating user' });
    } else if (result.rows.length === 0) {
      res.status(401).send({ message: 'Invalid username or password' });
    } else {
      const user = result.rows[0];
      res.send({ message: 'User authenticated successfully!', user });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});