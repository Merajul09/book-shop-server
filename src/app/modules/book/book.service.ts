import { BookModel } from '../book.model';
import { Book } from './book.interface';

const createBookIntoDB = async (book: Book) => {
  const result = await BookModel.create(book);
  return result;
};
const getAllBookIntoDB = async () => {
  const result = await BookModel.find();
  return result;
};
const getSingleBookFromDB = async (id: string) => {
  const result = await BookModel.findById(id);
  return result;
};
const UpdateBookIntoDB = async (id: string, updatedData: object) => {
  const result = await BookModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return result;
};
const DeleteBookFromDB = async (id: string) => {
  const result = await BookModel.findByIdAndDelete(id);
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getAllBookIntoDB,
  getSingleBookFromDB,
  UpdateBookIntoDB,
  DeleteBookFromDB,
};
