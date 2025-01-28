import express from 'express';
// import dotenv from 'dotenv';
import lab_router from './routers/route.js';

// dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//imported the lab_router
//-> localhost:8000/lab/
app.use('/lab', lab_router);

app.get('/', (req, res) => {
  res.send('welcome to the server');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
