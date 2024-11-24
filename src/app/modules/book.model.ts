import { Schema, model, connect } from 'mongoose';
import { Book, BookCategory } from './book/book.interface';

const bookSchema = new Schema<Book>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: BookCategory,
      message:
        "{VALUE} is not valid, only accept 'Religious'|'Poetry'|'SelfDevelopment'|'Science'|'Fiction'",
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, 'Quantity must be a positive number'],
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const BookModel = model<Book>('Book', bookSchema);
