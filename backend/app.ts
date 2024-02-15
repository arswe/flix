import colors from 'colors';
import express from 'express';

const app = express();
app.use(express.json());

const PORT = 8000;
app.listen(PORT, () => {
  console.log(
    colors.rainbow(
      `Server is running on port http://localhost:${process.env.PORT}`
    )
  );
});
