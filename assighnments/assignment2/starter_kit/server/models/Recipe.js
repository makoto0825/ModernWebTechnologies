import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: {
    type: String,
    required: true,
    enum: ['Easy', 'Medium', 'Hard'],
  },
  ingredients: { type: [String], required: true },
  steps: { type: [String], required: true },
});

export default mongoose.model('Recipe', RecipeSchema);
