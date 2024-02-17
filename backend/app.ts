import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/route';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8000;

const MONGO_URL = 'mongodb://localhost:27017';
mongoose
  .connect(MONGO_URL, {
    dbName: 'mailbox',
  })
  .then(() => {
    console.log('Database Connected...');
  })
  .catch((err) => {
    console.log('Error', err.message);
  });

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/', router);

app.listen(port, () => {
  console.log(
    colors.rainbow(`Backend is running on port http://localhost:${port}`)
  );
});
