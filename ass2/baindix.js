import express from 'express'
import bodyParser from 'body-parser'
import authorRouter from './routes/author.js'
import mongoose from 'mongoose'

var dburl ='mongodb+srv://kanthale1:kanthale12@cluster0.pcywb.mongodb.net/ass2?retryWrites=true&w=majority'
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})

.then(
    (result) => {
        console.log("connecting to db")
        server.listen(PORt)
        console.log("connection sucessfully!!")
    }
)

.catch(
    (err)=>{
        console.log(err)
    }
)

const server = express()
const PORt = 1100
server.use(bodyParser.json())

var page = (req, res) => { res.send("welcome") }
server.get("/",page)
server.use("/author",authorRouter)
