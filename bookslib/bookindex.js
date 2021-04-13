import express from 'express'
import bodyParser from 'body-parser'
import bookrouter from './routes/book.js'

const server = express()
const PORT = 9001

server.use(bodyParser.json())

var frontpage = (req,res) =>
res.send("welcome to book stall")
server.use("/book",bookrouter)
server.get("/", frontpage)

server.listen(PORT)