import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/product.js'
import mongoose from 'mongoose'

var dburl = 'mongodb+srv://kanthale1:kanthale12@cluster0.pcywb.mongodb.net/product?retryWrites=true&w=majority'
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})

.then(
    (result) =>{
        console.log("connecting to db")
        server.listen(PORT)
        console.log("server got sucessfully")
    }
)
.catch(
    (err) => {
        console.log(err)
    }
)
const server = express()
const PORT = 2200
server.use(bodyParser.json())

var homepage = (req,res) => res.send("welcome")
server.get("/",homepage)
server.use("/product",routes)
//server.listen(PORT)