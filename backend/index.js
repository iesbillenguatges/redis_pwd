import express from 'express';
import cors from 'cors';
import { createClient } from 'redis';

// Crear app Express
const app = express();
app.use(cors());
app.use(express.json());

// Crear client de Redis
const client = createClient({
  *** Aquest codi l'heu de copiar i apegar de la secció de reddis connect de la teua DB ***
  }
});

client.on('error', err => console.error('❌ Redis Client Error:', err));

try {
  await client.connect();
  console.log('✅ Connexió a Redis establerta');
} catch (err) {
  console.error('❌ Error connectant a Redis:', err);
  process.exit(1);
}

// Rutes
app.get('/', (req, res) => {
  res.send("API d'usuaris operativa. Fes GET a /usuaris per veure dades.");
});

app.get('/usuaris', async (req, res) => {
  const keys = await client.keys('usuari:*');
  const usuaris = [];

  for (const key of keys) {
    const data = await client.hGetAll(key);
    usuaris.push({ user: key.split(':')[1], ...data });
  }

  res.json(usuaris);
});

app.post('/alta', async (req, res) => {
  const { user, pass, rol } = req.body;
  if (!user || !pass || !rol) {
    return res.status(400).send("Falten dades: user, pass, rol");
  }
  await client.hSet(`usuari:${user}`, { pass, rol });
  res.sendStatus(201);
});

app.delete('/baixa/:user', async (req, res) => {
  const { user } = req.params;
  await client.del(`usuari:${user}`);
  res.sendStatus(200);
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("🚀 Backend escoltant a http://localhost:3000");
});

