
import {Student} from '../models/student.js'

let students = []


export const getStudent = (req,res) => {
    
    console.log(req.qurey)
    if(req.query.name){
        getStudentByname(req,res)
    }else{
        console.log("getStudent()...")
        //res.send(students)
        Student.find()
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

export const createstudent = (req,res) => {
    console.log("createStudent()..")
    const Students = new Student({
        name:req.body.name,
        location:req.body.location,
        collagename:req.body.collagename
    })
    Students.save()
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

const getStudentByname = (req,res)=>{
    Student.aggregate(
    [{$match:{"name":req.query.name}}]
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

