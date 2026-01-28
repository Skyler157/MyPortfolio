import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sampleRoute from './routes/sampleRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', sampleRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
