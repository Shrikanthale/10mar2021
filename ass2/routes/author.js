import express from 'express'
import {getAuthor,createAuthor} from '../controller/author.js'
const router = express.Router()

router.get("/getall",getAuthor)
router.post("/add",createAuthor)

export default router 
