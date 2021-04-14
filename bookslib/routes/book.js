import express from 'express'
import {getbook,createbook,getbookById} from '../controller/books.js'
const booker = express.Router()

booker.get("/",getbook)
booker.get("/:id",getbookById)
booker.post("/",createbook)


export default booker