import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(
    colors.rainbow(`Server is running on port http://localhost:${port}`)
  );
});
