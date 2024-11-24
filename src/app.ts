import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BookRoutes } from './app/modules/book/book.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', BookRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Book shop server is running');
});
export default app;
