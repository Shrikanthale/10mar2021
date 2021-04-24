import express from 'express'
import {getroom,getroombyid,createroom,deleteroombyid,updateroombyid} from '../controller/app.js'

const router = express.Router()

router.get("/",getroom)
router.get("/:id",getroombyid)
router.post("/",createroom)
router.delete("/:id",deleteroombyid)
router.put("/:id",updateroombyid)

export default router 