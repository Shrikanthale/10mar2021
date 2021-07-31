import express from 'express'
import{getgrocery,getgrocerybyid,creategrocery,deletegrocerybyid,updategrocery} from '../contoller/app.js'

const router = express.Router()

router.get('/getAll',getgrocery)
router.get('/:id',getgrocerybyid)
router.post('/add',creategrocery)
router.delete('/deleteGroceryItem/:id',deletegrocerybyid)
router.patch('/updatePurchaseStatus/:id',updategrocery)

export default router 

// "groceryItem":"wheat 3 kg",
//     "isPurchesed":"false"