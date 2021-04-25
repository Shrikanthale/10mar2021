import {Customerdeatials} from '../models/app.js'

let customers = []


export const getcustomer = (req,res) => {
    
    //res.send(customers)
    console.log(req.query)

   if(req.query.date){
       getcustomerroomname(req.res)
   }
   else{
    console.log("getcustomer")
    Customerdeatials.find()
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

export const getcustomerbyid =(req,res) => {
    console.log("getbyid")
    Customerdeatials.findById(req.params.id)
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

export const createcustomer = (req,res) => {
    console.log("createcustomer")
    //customers.push(req.body)
    //res.send("done...")
    const customerdeatials = new Customerdeatials({
        roomname:req.body.roomname,
        customername:req.body.customername,
        bookingsataus:req.body.bookingsataus,
        date:req.body.date,
        starttimeandendtime:req.body.starttimeandendtime
    })
    customerdeatials.save()
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

export const deletecustomerbyid = (req,res) => {
    console.log("deletecustomerbyid")
    Customerdeatials.findByIdAndDelete(req.params.id)
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

export const updatecustomerbyid = (req,res) => {
    console.log("updatecustomerbyid")
    Customerdeatials.findByIdAndUpdate(req.params.id,({
        roomname:req.body.roomname
    }))
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

const getcustomerroomname = (req,res)=>{
    Customerdeatials.aggregate(
    [{$match:{"date":req.query.date}}]
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