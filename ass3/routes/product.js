import express from 'express'
import {getproduct,createproduct} from '../controller/product.js'
const router = express.Router()

router.get("/getall",getproduct)
router.post("/add",createproduct)

export default router