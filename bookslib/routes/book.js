import express from 'express'
import {getbook,createbook} from '../controller/books.js'
const booker = express.Router()

booker.get("/",getbook)
booker.post("/",createbook)

export default booker