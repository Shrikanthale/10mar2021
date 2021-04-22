import express from 'express' 
import bodyParser from 'body-parser'
import dateRouter from './routes/year.js'
import mongoose from 'mongoose'

var url = 'mongodb+srv://kanthale:kanthale1@cluster0.pcywb.mongodb.net/checkDateOfBirth?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})

.then(
    (result) => {
        //res.send(result)
        console.log("connecting to db..")
        server.listen(PORT)
        console.log("server started now...")
    }
)
.catch(
    (err) => {
        res.send(err)
    }
)

const server = express()
const PORT = 1122
server.use(bodyParser.json())


var homepage = (req,res) => { res.send("welcome very soon!!!")}
server.use("/year",dateRouter)
server.get("/",homepage)
