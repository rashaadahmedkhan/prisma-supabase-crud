import {Router} from "express";
import {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
} from "../controllers/author.controller";


const authorRouter = Router()

authorRouter.get("/", getAllAuthors)
authorRouter.get("/:id", getAuthorById)
authorRouter.get("/", createAuthor)
authorRouter.get("/:id", updateAuthor)
authorRouter.get("/:id", deleteAuthor)

export default authorRouter