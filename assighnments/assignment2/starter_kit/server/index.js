import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Recipe from './models/Recipe.js'; // `.js` 拡張子を明示
import recipeRouter from './routes/recipes_router.js'; // ルーターをインポート

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use('/', recipeRouter); // /api がプレフィックスとして付与される

// app.get('/recipe', async (req, res) => {
//   console.log('Received request:', req.body); // リクエスト内容をログに表示
//   const recipes = await Recipe.find();
//   res.json(recipes);
// });

console.log('tsuga');

app.listen(8001, () => console.log('Server running on port 8001'));
