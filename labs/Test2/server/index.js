const PORT = process.env.PORT || 8000;
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); // Now allow CORS for all requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for /route_test
app.get(
  '/route_test',
  (req, res, next) => {
    const testValidation = req.query.test_validation;

    // Log the test_validation value
    console.log(`test_validation value: ${testValidation}`);
    const currentDate = new Date();
    // Log the time
    console.log(`[${currentDate.toUTCString()}] Route: /route_test`);

    next();
  },
  (req, res) => {
    res.send('Welcome to the /route_test endpoint');
  }
);

app.get('/', (req, res) => {
  res.send('Welcome to our server');
});

app.use('', (req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
