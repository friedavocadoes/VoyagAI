
import express from 'express';
const router = express.Router();
import User from '../modal/user.js'
// import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



// ! later in env
const JWT_SECRET = 'voyagaiproject';

// Sign Up
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name);

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
    });

    await user.save();
    console.log(user.name);
    const payload = {
      user: {
        id: user.id,
        name: user.name,
      },
    };

    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.status(201).json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      console.log("this");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log(user.name);

    const payload = {
      user: {
        id: user.id,
        name: user.name,
      },
    };

    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
