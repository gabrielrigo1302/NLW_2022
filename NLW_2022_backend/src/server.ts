import express from 'express';
import  cors from 'cors';
import { routes } from './routes';

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port || 3333, () => {
    console.log(`Port: ${port}`);
});