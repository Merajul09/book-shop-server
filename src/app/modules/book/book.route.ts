import express from 'express';
import { BookControllers } from './book.controller';

const router = express.Router();

router.post('/', BookControllers.createBook);
router.get('/', BookControllers.getAllBooks);
router.get('/:id', BookControllers.getSingleBook);
router.put('/:id', BookControllers.UpdateSingleBook);
router.delete('/:bookId', BookControllers.DeleteSingleBook);

export const BookRoutes = router;
