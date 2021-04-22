import {Year} from '../models/year.js'
let years = []

export const getyear = (req,res) => {
    console.log(req.query)
    console.log("getyear")
   // res.send(years)
   Year.find()
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
export const getyearById = (req,res) => {
    console.log("getyearbyid")
    Year.findById(req.params.id)
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

export const createyear = (req,res) => {
    console.log("createyear")
   //years.push(req.body)
   // res.send("okay...!")
   const year = new Year({
       date:req.body.date,
       year:req.body.Year
   })
   year.save()
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

export const deleteyearById = (req,res) => {
    console.log("deleteyearbyid")
    Year.findByIdAndDelete(req.params.id)
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

export const updateyearById = (req,res) => {
    console.log("updateyearbyid")
    Year.findByIdAndUpdate(req.params.id,{
        date:req.body.date
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