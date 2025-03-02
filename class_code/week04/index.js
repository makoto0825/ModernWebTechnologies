/* Project setup: For the server
1 - new project folder
2 - open an integrated terminal
3 - run these commands:
    npm init -y
    npm i express nodemon
    (optional) -> go into package.json and add "type": "module" to enable import from 
*/

// [Please enable only ONE of these]
// import express from "express"; // if you are using type: module
import express from 'express';
import logger from './middleware/logger.js';
import auth from './middleware/auth.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(logger); //this is application wide,so it runs everywhere

// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get('/', logger, (req, res) => {
  res.send('Welcome to our server');
});

app.get('/about', (req, res) => {
  logger(req, res);
  res.send('Welcome to the about page');
});

app.get('/login', (req, res) => {
  res.send('We are received your request -login');
});
app.post('/login', (req, res) => {
  res.send('We store your information');
});

app.get('/fetchData', auth, (req, res) => {
  res.send('Hi makoto, here is your data');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use('', (req, res) => {
  res.status(404).send('Page not found');
});
