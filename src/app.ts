import express from 'express';
import http from 'http';
import cors from 'cors';
import routes from './routes/mainRoutes';
import swaggerUi from 'swagger-ui-express';
import specs from '../swaggerConfig';


const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.use(cors({
  origin: '*',
}));

const serverHttp = http.createServer(app);

app.use(express.json());

app.use('/', routes);

app.get('/', (request, response) => response.json({ message: 'SERVER ON' }));

export default serverHttp;

