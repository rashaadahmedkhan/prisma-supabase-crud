import express from 'express'
import AuthorRouter from "./routes/author.router";
import authorRouter from "./routes/author.router";
import bookRouter from "./routes/book.router";

const app = express()
const port = 8080

app.use(express.json())

app.use('/authors', authorRouter)

app.use('/books', bookRouter)

app.get('/', (req,res) => {
    res.json({message: 'hello'}).status(200)
})

app.get('/ping', (req, res) => {
    res.json({message: 'ping received.'}).status(200)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})