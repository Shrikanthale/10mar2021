import mongoose from 'mongoose'

const Schema = mongoose.Schema
const customerSchema = new Schema({
    customerName:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    startingTIME:{
        type:String,
        require:true
    },
    roomId:{
        type:String,
        require:true
    }
},{Timestamp:true})

export const Room = mongoose.model('Room',customerSchema)