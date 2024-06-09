import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
