import express  from 'express';
import { orderRoutes } from './routes/orderRoutes.js';
import { userRoutes } from './routes/userRoutes.js';
import { requestLogMiddleware } from './middleware/requestLogMiddleware.js';

const app = express();
app.use(express.json());
app.use(requestLogMiddleware);
app.use('/', userRoutes);
app.use('/', orderRoutes);

app.listen(process.env.PORT, () => {
  console.log("function is running on Port!");
})
