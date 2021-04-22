import mongoose from 'mongoose'

const Schema = mongoose.Schema

const yearSchema = new Schema({
    date:{
        type:String,
        require:true
    },
    year:{
        type:String,
        require:true
    }
    
},{timestamps:true})

export const Year = mongoose.model('Year',yearSchema)