import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import sodaRoutes from './routes/sodas.js';

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true  }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true  }));
app.use(cors());

app.use('/sodas', sodaRoutes);

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, {  useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));