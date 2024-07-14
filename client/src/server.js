// const express = require('express');
// const bcrypt = require("bcrypt");
// const pg = require("pg")
// const jwt = require("jsonwebtoken")
// const dotenv = require("dotenv")

// const app = express();
// app.use(bodyParser.json());

// const pool = new pg.Pool({
//   host: '127.0.0.1',
//   database: 'postgres',
//   user: 'postgres',
//   password: '270989'
// });

// app.post('/api/client', async (req, res) => {
//   const { nom, prenom } = req.body;

//   try {
//     const result = await pool.query('INSERT INTO utilisateurs (nom, prenom) VALUES ($1, $2) RETURNING *', [nom, prenom]);
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erreur de la base de données' });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Serveur en écoute sur le port ${PORT}`);
// });

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/adduser", (req, res) => {
  console.log(req, body)
  res.send("Reponse Received" + req.body)
})

app.listen(4000, () => console.log("Server on localhost: 4000"))