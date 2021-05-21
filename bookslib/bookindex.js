import express from 'express'
import bodyParser from 'body-parser'
import bookrouter from './routes/book.js'
import mongoose from 'mongoose'
import tutorialRouter from './routes/tutorials.js'

var dbURI ='mongodb+srv://kanthale:kanthale1@cluster0.pcywb.mongodb.net/library?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})

.then(
    (result) => {
        console.log("connecting to db....")
        //console.log(result)
        server.listen(PORT)
        console.log("server got started sucessfully")
    }
)
.catch(
    (err)=>{
        console.log(err)
    }
)

const server = express()
const PORT = 9002

server.use(bodyParser.json())

var frontpage = (req,res) =>
res.send("welcome to book stall")
server.use("/book",bookrouter)
server.use("/tutorial",tutorialRouter)
server.get("/", frontpage)


//mongodb+srv://kanthale:<password>@cluster0.pcywb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority