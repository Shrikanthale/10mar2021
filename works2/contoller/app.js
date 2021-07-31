import {Grocerydeatials} from '../models/app.js'

let customers = []


export const getgrocery = (req,res) => {
    
    //res.send(customers)
    console.log(req.query)

   if(req.query.groceryItem){
       getgroceryname(req.res)
   }
   else{
    console.log("getgrocery")
    Grocerydeatials.find()
    .then(
        (result) => {
            res.send(result)
        }
    )
    .catch(
        (err) =>{
            res.send(err)
        }
    )
   }
}

export const getgrocerybyid =(req,res) => {
    console.log("getbyid")
    Grocerydeatials.findById(req.params.id)
    .then(
        (result) => {
            res.send(result)
        }
    )
    .catch(
        (err) =>{
            res.send(err)
        }
    )
}

export const creategrocery = (req,res) => {
    console.log("creategrocery")
    //customers.push(req.body)
    //res.send("done...")
    const grocerydeatials = new Grocerydeatials({
        groceryItem:req.body.groceryItem,
        isPurchesed:req.body.isPurchesed,
    })
    grocerydeatials.save()
    .then(
        (result) => {
            res.send({"result":"sucessfull"})
        }
    )
    .catch(
        (err) =>{
            res.send(err)
        }
    )
}

export const deletegrocerybyid = (req,res) => {
    console.log("deletegrocerybyid")
    Grocerydeatials.findByIdAndDelete(req.params.id)
    .then(
        (result) => {
            res.send({"result":"sucessfull"})
        }
    )
    .catch(
        (err) =>{
            res.send(err)
        }
    )
}

export const updategrocery = (req,res) => {
    console.log("updategrocery")
    Grocerydeatials.findByIdAndUpdate(req.params.id,({
        isPurchesed:req.body.isPurchesed
    }))
    .then(
        (result) => {
            res.send({"result":"sucessfull"})
        }
    )
    .catch(
        (err) =>{
            res.send(err)
        }
    )
}

const getgroceryname = (req,res)=>{
    Grocerydeatials.aggregate(
    [{$match:{"groceryItem":req.query.groceryItem}}]
    )
.then(
    (result)=>{
        res.send(result)
    }
)
.catch(
    (err)=>{
        console.log(err)
    }

)
}