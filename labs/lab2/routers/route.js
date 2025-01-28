import express from 'express';

const router = express.Router();
//checking if in root
router.get('/', (req, res) => {
  res.send('welcome to the server');
});
//name route
router.get('/name', (req, res) => {
  res.send('Makoto Tsuga');
});
//greetings
router.get('/greeting', (req, res) => {
  res.send('Hello from makoto, Students number is n01648853 ');
});
//http://localhost:8000/lab/add/2/3
router.get('/add/:x/:y', (req, res) => {
  let x = parseFloat(req.params.x);
  let y = parseFloat(req.params.y);
  res.send(`${x + y}`);
});
//calculation
router.get('/calculate/:a/:b/:operation', (req, res) => {
  let a = parseFloat(req.params.a);
  let b = parseFloat(req.params.b);
  let operation = req.params.operation;
  let result = 0;

  //http://localhost:8000/lab/calculate/10/5/%2f
  switch (operation) {
    case '+': //->%2B
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b; //->%2f
      break;
    default:
      res.send('Invalid operation');
      break;
  }
  res.send(`${result}`);
});

router.get('/', (req, res) => {});

export default router;
