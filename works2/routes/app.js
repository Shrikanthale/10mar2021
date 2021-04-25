import express from 'express'
import{getcustomer,createcustomer} from '../contoller/app.js'

const router = express.Router()

router.get('/getall',getcustomer)
router.post('/',createcustomer)

export default router 
