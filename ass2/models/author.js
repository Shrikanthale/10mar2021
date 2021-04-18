import mongoose from 'mongoose'

const Schema = mongoose.Schema

const authorSchema = new Schema({
    queotes:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Author = mongoose.model('Author',authorSchema)