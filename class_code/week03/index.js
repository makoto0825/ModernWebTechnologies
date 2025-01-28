import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // load the environment variables
const app = express(); // create the server
const PORT = process.env.PORT || 8000; // set the port

//CRUD -> Server is set up to do these things

//Methods: GET(READ),POST(CREATE),PUT(UPDATE),DELETE
app.get('/search', (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.params);
  res.send('You came to the /search route');
});
app.get('/item/:itemID', (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.params);
  res.send('You came to the /search route');
});
app.post('/', (req, res) => {
  res.send('Welcome to the server-POST');
});
app.put('/', (req, res) => {
  res.send('Welcome to the server-PUT');
});
app.delete('/', (req, res) => {
  res.send('Welcome to the server-DELETE');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
