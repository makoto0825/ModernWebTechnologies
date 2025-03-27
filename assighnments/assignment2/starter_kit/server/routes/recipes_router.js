import express from 'express';
import Recipe from '../models/Recipe.js'; // `.js` を明示

const router = express.Router();

// すべてのレシピを取得
router.get('/recipe', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipes' });
  }
});

// 新しいレシピを追加
router.post('/recipe', async (req, res) => {
  console.log('Received request:', req.body); // リクエスト内容をログに表示

  try {
    const { name, description, difficulty, ingredients, steps } = req.body;
    const newRecipe = new Recipe({
      name,
      description,
      difficulty,
      ingredients,
      steps,
    });
    await newRecipe.save();
    console.log('Recipe added:'); // 追加したレシピをログに表示
    res.status(201).json(newRecipe);
  } catch (error) {
    console.log('Error adding recipe:', error); // エラー内容をログに表示
    res.status(400).json({ error: 'Error adding recipe' });
  }
});

// 特定のレシピを取得
router.get('/recipe/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipe' });
  }
});

// レシピを更新
router.put('/recipe/:id', async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecipe)
      return res.status(404).json({ error: 'Recipe not found' });
    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Error updating recipe' });
  }
});

// レシピを削除
router.delete('/recipe/:id', async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe)
      return res.status(404).json({ error: 'Recipe not found' });
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting recipe' });
  }
});

export default router;
