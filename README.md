# Book Shop

A professional-grade Express application developed with TypeScript to manage a book store. This project integrates MongoDB with Mongoose for database management and ensures data integrity with robust schema validation.

## Table of Contents

- Features
- Technologies Used
- Installation
- Usage
- API Endpoints
- Contributing

## Features

- **Express server** with TypeScript for better type safety and developer experience.
- **MongoDB** database integration using **Mongoose**.
- Well-structured and validated data models using **Mongoose schema validation**.
- CRUD operations for managing books.
- Modular and scalable project structure.

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Fast, unopinionated web framework.
- **TypeScript:** Type safety and improved development experience.
- **MongoDB:** NoSQL database.
- **Mongoose:** Elegant MongoDB object modeling.
- **dotenv:** Environment variable management.

## Live Demo

Visit the live site here: [Book Shop](https://assignment-two-silk.vercel.app)

---

## How to Run the Application Locally

Follow these steps to run the application on your local machine:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** (Node package manager)
- **MongoDB** (running instance or cloud-based MongoDB Atlas)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Merajul09/book-shop-server.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd book-shop
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```
   **or, if using yarn:**
   ```bash
   yarn add
   ```
4. **Set Up Environment Variables** Create a `.env` file in the root directory and add the following:

```env
PORT=5000
DATABASE_URL=mongodb+srv://
```

5. **Start the Development Server**
   ```bash
   npm run dev
   ```
6. **Open in Browser**
   The server will start at http://localhost:5000.

## Deployment

The application is hosted on vercel. To deploy your own version:

1. Push the code to a GitHub repository.
2. Connect your repository to vercel.
3. Deploy with a simple one-click process in vercel's dashboard.

## API Endpoints

### Base URL

`http://localhost:5000/api/products`

### Endpoints

| Method |          Endpoint          |                   Description |
| :----- | :------------------------: | ----------------------------: |
| GET    |      `/api/products`       |                 Get All Books |
| GET    | `/api/products/:productId` |           Get a Specific Book |
| GET    |   `/api/orders/revenue`    | Calculate Revenue from Orders |
| POST   |       `/api/orders`        |                  Order a Book |
| POST   |      `/api/products`       |                 Create a Book |
| PUT    | `/api/products/:productId` |                 Update a Book |
| DELETE | `/api/products/:productId` |                 Delete a Book |

## Mongoose Schema Example

```typescript
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
```
