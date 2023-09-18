import {Router} from "express";
import {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} from "../controllers/book.controller";

const bookRouter = Router()

bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)
bookRouter.get("/", createBook)
bookRouter.get("/:id", updateBook)
bookRouter.get("/:id", deleteBook)

export default bookRouter