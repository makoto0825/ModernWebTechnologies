import express from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload_directory = path.join(__dirname, '../uploads');

// Ensure the uploads directory exists
if (!fs.existsSync(upload_directory)) {
  fs.mkdirSync(upload_directory, { recursive: true });
}

router.post('/dog-image', async (req, res) => {
  console.log('Request Body:', req.body);
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ error: 'Image URL is required' });
    }

    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    // Generate a unique filename
    const filename = `dog_${Date.now()}.jpg`;
    const filePath = path.join(upload_directory, filename);

    fs.writeFileSync(filePath, response.data);

    res.json({ message: 'Image saved successfully', filename });
  } catch (error) {
    console.error('Error saving image:', error);
    res.status(500).json({ error: 'Failed to save image' });
  }
});

export default router;
