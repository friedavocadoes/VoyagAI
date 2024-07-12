
import express from 'express';
import connectDB from './db/db.js';
import authroutes from './routes/auth.js';
import bodyParser from 'body-parser'
import AIRoutes from './routes/gemini.js';
// import auth from './middlewares/checktoken.js';

import cors from 'cors';


const app = express();

connectDB();

app.use(express.json());
app.use(bodyParser.json()); 
app.use(cors({ origin: '*'}));

// app.get('/', (req, res) => {
//   res.send('API Running');
// });

app.use('/api/auth', authroutes);
app.use('/', AIRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

