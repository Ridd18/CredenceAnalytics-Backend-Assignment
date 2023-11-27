import express from "express";
import { addBooks, deleteBook, getAllBooks,getBookById, updateBook } from "../controller/booksController.js";

const router = express.Router();

router.get("/home", (req, res) => {
  res.json({ message: "welcome Home" });
});

router.post("/addBooks", addBooks)
router.get("/books",getAllBooks)
router.get("/books/:id",getBookById)
router.put("/books/update/:id",updateBook)
router.delete("/books/delete/:id",deleteBook)





export default router;