import express from 'express';
const router = express.Router();
import User from '../modal/user.js'
import Wishlist from '../modal/wishlist.js';
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

    if (password.lenght < 8) {
      return res.status(400).json({ message: 'Password should be 7 characters or more' });
    }

    let wishlistInit = new Wishlist({
      email,
    });
    
    await wishlistInit.save();

    user = new User({
      name,
      email,
      password,
    });

    await user.save();
    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
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
  // console.log(email);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    console.log(user.email);
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      console.log("this");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
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
