import {Room} from '../models/app.js'

let rooms = []

export const getroom = (req,res) => {
    console.log(req.query)

    if(req.query.roomId){
        getroomid(req.res)
    }
    else{
        console.log("in get")
        //res.send(rooms)
    
        Room.find()
        .then(
            (result) => {
                res.send(result)
            }
        )
        .catch(
            (err) => {
              console.log(err)
            }
        )
    
    }
}
export const getroombyid = (req,res) => {
    console.log("getroombyid")

    Room.findById(req.params.id)
    .then(
        (result) => {
            res.send(result)
        }
    )
    .catch(
        (err) => {
            console.log(err)
        }
    )
}

export const createroom = (req,res) => {
    console.log("in post")
    //rooms.push(req.body)
    //res.send("ok...")
    const room = new Room({
        customerName:req.body.customerName,
        date:req.body.date,
        startingTIME:req.body.startingTIME,
        roomId:req.body.roomId
    })
    room.save()
    .then(
        (result) => {
            res.send(result)
        }
    )
    .catch(
        (err) => {
          res.send(err)
        }
    )
}

export const deleteroombyid = (req,res) => {
    console.log("deleteroombyid")

    Room.findByIdAndDelete(req.params.id)
    .then(
        (result) => {
            res.send(result)
        }
    )
    .catch(
        (err) => {
          console.log(err)
        }
    )
}

export const updateroombyid = (req,res) => {
    console.log("updateroombyid")

    Room.findByIdAndUpdate(req.params.id,{
        date:req.body.id
    })
    .then(
        (result) => {
            res.send(result)
        }
    )
    .catch(
        (err) => {
          console.log(err)
        }
    )
}

const getroomid = (req,res) => {
    Room.aggregate(
        [{$match:{"roomId":req.query.roomId}}]
    )
    .then(
        (result) => {
            res.send(result)
        }
    )
    .catch(
        (err) => {
          console.log(err)
        }
    )
}