import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { BookModel } from '../book.model';
import { OrderModel } from '../order.model';

const orderBook = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const { email, product, quantity } = orderData;
    const bookDoc = await BookModel.findById(product);
    if (!bookDoc) {
      throw new Error('Book not found');
    }
    if (bookDoc.quantity < quantity) {
      throw new Error('Insufficient stock to complete the order');
    }
    const totalPrice = bookDoc.price * quantity;
    const order = new OrderModel({
      email,
      product,
      quantity,
      totalPrice,
    });
    await order.save();
    bookDoc.quantity -= quantity;
    if (bookDoc.quantity === 0) {
      bookDoc.inStock = false;
    }
    await bookDoc.save();
    const result = await OrderServices.orderBookIntoDB(order);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err) {
    const error = err as Error;
    if (error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  }
};
const getAllRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.ordersRevenue();
    if (!result[0]) {
      throw new Error('No revenue available');
    }
    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result[0],
    });
  } catch (err) {
    const error = err as Error;
    if (error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  }
};
export const OrderController = {
  orderBook,
  getAllRevenue,
};
