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
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const _finame = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_finame);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(_dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const app = express();
const PORT = process.env.PORT || 8000;

// middlelware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// middlelware
app.use(cors());
app.use(express.urlencoded({ extended: true })); //for HTML form data
app.use(express.json()); //extracts  application/json data, OLD method was body-parser

// routes
app.get('/', (req, res) => {
  res.send('Welcome to our server');
});

// send data
app.get('/data', (req, res) => {
  const data = {
    fname: 'Makoto',
    lname: 'Shinkai',
  };
  res.send(data);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`Username: ${username}, Password: ${password}`);
});

app.post('/fileForm', (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send('I received your information');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use('', (req, res) => {
  res.status(404).send('Page not found');
});
