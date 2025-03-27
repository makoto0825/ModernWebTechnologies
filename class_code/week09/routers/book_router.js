import express from 'express';
import Book from '../models/book_model.js';

const router = express.Router();
//1- fetch from DB

router.get('/', (req, res) => {
  Book.find().then((results) => {
    res.json(results);
  });
});
//2 - fetch by id
router.get('/:id', (req, res) => {
  Book.findById(req.params.id).then((result) => {
    res.json(result);
  });
});

//3- search
router.get('/search', (req, res) => {
  const filters = {};
  if (req.query.title) {
    filters.title = req.query.title;
  }
  if (req.query.date_created) {
    switch (req.query.date_range) {
      case 'lt':
        filters.year = { $lt: parseFloat(req.query.date_created) };
        break;
      case 'gt':
        filters.year = { $gt: parseFloat(req.query.date_created) };
        break;
      case 'lte':
        filters.year = { $lte: parseFloat(req.query.date_created) };
        break;
      case 'gte':
        filters.year = { $gte: parseFloat(req.query.date_created) };
        break;
      default:
        filters.year = parseFloat(req.query.date_created);
        break; // If date_range doesn't match any case, do nothing
    }
  }
  Book.find(filters).then((result) => {
    res.json(result);
  });
});

//4- update
router.update('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.paramsid).then(() => {
    res.json(result);
  });
});

//4- delete
router.delete('/:id', (req, res) => {
  Book.findByIdAndDelete(req.paramsid).then(() => {
    res.json(result);
  });
});

router.post('/save', (req, res) => {
  let newBook = new Book({
    title,
    author,
    publish,
    page: 500,
  });
  newBook.save().then((result) => {
    res.json({ message: 'Book saved' });
  });
});

export default router;
