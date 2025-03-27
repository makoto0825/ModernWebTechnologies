import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';

//1-register
const router = express.Router();

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10).then((hashPassword) => {
    let newUser = new User({ email, password: hashPassword });
    newUser.save().then(() => {
      res.json({ message: 'User created successfully' });
    });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((userAccount) => {
    if (!userAccount)
      return res.status(400).json({ message: 'User not found' });
    bcrypt.compare(password, userAccount.password).then((compareResult) => {
      if (!compareResult) return res.json({ message: 'You Have logged in' });
      res.json({ message: 'Logged in successfully' });
    });
  });
});

export default router;
