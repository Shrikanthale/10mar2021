import express from 'express'
import {getbook,createbook,getbookById,deletebookById,updatebookById} from '../controller/books.js'
const booker = express.Router()

booker.get("/",getbook)
booker.get("/:id",getbookById)
booker.post("/",createbook)
booker.delete("/:id",deletebookById)
booker.patch("/:id",updatebookById)

export default booker