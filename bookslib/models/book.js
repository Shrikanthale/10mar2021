import mongoose from 'mongoose'
const Schema= mongoose.Schema

const bookSchema = new Schema({
    author:{
        type:String,
        required:true
    },
    bookname:{
        type:String,
        require:true
    },
    available:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Book = mongoose.model('Book',bookSchema)