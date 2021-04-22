import express from 'express'
import {getyear,createyear,getyearById,deleteyearById,updateyearById} from '../controller/year.js'

const router = express.Router()

router.get("/",getyear)
router.get("/:id",getyearById)
router.post("/",createyear)
router.delete("/:id",deleteyearById)
router.put("/:id",updateyearById)

export default router
