import express from 'express';
import http from 'http';
import cors from 'cors';
import routes from './routes/mainRoutes';

const app = express();

app.use(cors({
  origin: '*',
}));

const serverHttp = http.createServer(app);

app.use(express.json());

app.use('/', routes);

app.get('/', (request, response) => response.json({ message: 'SERVER ON' }));

export default serverHttp;

