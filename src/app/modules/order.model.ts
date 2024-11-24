import mongoose, { model, Schema } from 'mongoose';
import { Order } from './order/order.interface';

const OrderSchema: Schema = new Schema<Order>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be a positive number'],
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [1, 'TotalPrice must be a positive number'],
    },
  },
  {
    timestamps: true,
  },
);

export const OrderModel = model<Order>('Order', OrderSchema);
