import { OrderModel } from '../order.model';
import { Order } from './order.interface';

const orderBookIntoDB = async (orderData: Order) => {
  const result = await OrderModel.create(orderData);
  return result;
};
const ordersRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } },
    },
    { $project: { totalRevenue: 1, _id: 0 } },
  ]);
  return result;
};

export const OrderServices = {
  orderBookIntoDB,
  ordersRevenue,
};
