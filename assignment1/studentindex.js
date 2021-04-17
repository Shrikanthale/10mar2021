import express from 'express'
import bodyParser from 'body-parser'
import studentrouter from './routes/student.js'
import mongoose from 'mongoose'

var dbURI = 'mongodb+srv://kanthale1:kanthale12@cluster0.pcywb.mongodb.net/assignment1?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})

.then(
    (result)=>{
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
const PORT = 4005
server.use(bodyParser.json())

var homepage = (req,res) =>  {
    res.send("welcome to our school")
}

server.use("/student",studentrouter)
server.get("/",homepage)
//server.listen(8100)
