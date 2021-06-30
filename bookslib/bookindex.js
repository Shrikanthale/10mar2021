import express from 'express'
import bodyParser from 'body-parser'
import bookrouter from './routes/book.js'
import mongoose from 'mongoose'
import tutorialRouter from './routes/tutorials.js'
import pgdb from './models/bookindex.js'
import cors from 'cors';

var corsoptions = {
    origin : "http://localhost:9002"
};
const Roles = pgdb.roles;
function initializeDB(){
    Roles.create({                       // while doing post req creating row inside table
        id : 1,
        name : "user"
    })
    Roles.create({
        id : 2,
        name : "admin"
    })
    Roles.create({
        id : 3,
        name : "moderator"
    })
}
pgdb.sequelize.sync({force : true})  // this will drop the table and re-sync the db
.then(
    () => {
        initializeDB();
       // console.log("+++++")
        //console.log(result)
       // console.log("++++")
    }
)

.catch(
    (err) => {
        console.log("----")
        console.log(err)
        console.log("-----")
    }
)
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
server.use(cors(corsoptions));
//parser req content type - application/json
server.use(bodyParser.json())

var frontpage = (req,res) =>
res.send("welcome to book stall")
server.use("/book",bookrouter)
server.use("/tutorial",tutorialRouter)
server.get("/", frontpage)


//mongodb+srv://kanthale:<password>@cluster0.pcywb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority