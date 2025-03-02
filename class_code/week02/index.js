import http from 'http';
import fs from 'fs'; //ファイルを読み込むためのモジュール
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    let webpage = fs.readFileSync('homepage.html'); //ファイルを読み込む
    res.end(webpage);
  } else if (req.url === '/about') {
    res.end('<h1>About</h1>');
  } else if (req.url === '/user/account/id') {
    res.end('My name is makoto');
  } else {
    res.end('<h1>Page Not Found</h1>');
  }
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//httms://www.ebay.ca/items/1234
