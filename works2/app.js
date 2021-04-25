import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import customerroutes from './routes/app.js'

var url = 'mongodb+srv://kanthale:kanthale1@cluster0.pcywb.mongodb.net/roombooking?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})

.then(
    (result) => {
        console.log("conecting to db...")
        server.listen(PORT)
        console.log("server started")
    }
)
.catch(
    (err) => {
        res.send(err)
    }
)

const server = express()
const PORT = 1010
server.use(bodyParser.json())

var deatails = (req,res) => res.send("welcome....")
server.use("/room",customerroutes)
server.get('/',deatails)
