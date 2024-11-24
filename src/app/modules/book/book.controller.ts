import { Request, Response } from 'express';
import { BookServices } from './book.service';
import { BookModel } from '../book.model';

const createBook = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;
    const result = await BookServices.createBookIntoDB(bookData);
    res.status(200).json({
      success: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (err) {
    const error = err as Error;
    if (error.name === 'ValidationError') {
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        error: error,
        stack: error.stack,
      });
    }
  }
};
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.getAllBookIntoDB();
    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
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
const getSingleBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BookServices.getSingleBookFromDB(id);
    if (!result) {
      throw new Error('Book not found');
    }
    res.status(200).json({
      success: true,
      message: 'Book is retrieved successfully',
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
const UpdateSingleBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await BookServices.UpdateBookIntoDB(id, updatedData);

    res.status(200).json({
      success: true,
      message: 'Book is updated successfully',
      data: result,
    });
  } catch (err) {
    const error = err as Error;
    if (error.name === 'ValidationError') {
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        error: error,
        stack: error.stack,
      });
    }
  }
};
const DeleteSingleBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const result = await BookServices.DeleteBookFromDB(bookId);
    if (!result) {
      throw new Error('Book not found');
    }
    res.status(200).json({
      success: true,
      message: 'Book is Deleted successfully',
      data: {},
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

export const BookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
  UpdateSingleBook,
  DeleteSingleBook,
};
