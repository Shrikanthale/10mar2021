import express from 'express'
import {getStudent,createstudent} from '../controller/student.js'
const student = express.Router()


student.get("/",getStudent)
student.post("/add",createstudent)

export default student 