/*
home page
about us 
contact
login
register
*/

import http from 'http';
import fs from 'fs';
import path from 'path';
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    let webpage = fs.readFileSync('pages/placeholder.html');
    res.end(webpage);
  } else if (req.url === '/about') {
    let webpage = fs.readFileSync(path.join('pages', 'about.html'));
    res.end(webpage);
  } else if (req.url === '/history') {
    let webpage = fs.readFileSync(path.join('pages', 'history.html'));
    res.end(webpage);
  } else {
    let webpage = fs.readFileSync(path.join('pages', 'notFoundPage.html'));
    res.end(webpage);
  }
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
