import express from 'express'
import{getgrocery,getgrocerybyid,creategrocery,deletegrocerybyid} from '../contoller/app.js'

const router = express.Router()

router.get('/getAll',getgrocery)
router.get('/:id',getgrocerybyid)
router.post('/add',creategrocery)
router.delete('/deleteGroceryItem',deletegrocerybyid)
//router.update('/:id',updategrocery)

export default router 

// "groceryItem":"wheat 3 kg",
//     "isPurchesed":"false"