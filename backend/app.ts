import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

const MONGO_URL = 'mongodb://localhost:27017';
mongoose
  .connect(MONGO_URL, {
    dbName: 'mailbox',
  })
  .then(() => {
    console.log('Database Connected..');
  })
  .catch((err) => {
    console.log('Error', err.message);
  });

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(
    colors.rainbow(`Server is running on port http://localhost:${port}`)
  );
});
