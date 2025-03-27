import mongoose from 'mongoose';

// {
//     "title": "The Pragmatic Programmer",
//     "author": "Andrew Hunt, David Thomas",
//     "publisher": "Addison-Wesley",
//     "pages": 352,
//     "release_date": "1999-10-30",
//     "ISBN": "978-0201616224"
//     },
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
  },
  pages: {
    type: Number,
    required: true,
  },
  genres: [
    {
      type: String,
      required: true,
    },
  ],
  date_created: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model('books', bookSchema);
module.exports = Book;
