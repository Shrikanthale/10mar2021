import mongoose from 'mongoose'

const Schema = mongoose.Schema

const customerSchema = new Schema({
    roomname:{
        type:String,
        require:true
    },
    customername:{
        type:String,
        require:true,
    },
    bookingsataus:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    starttimeandendtime:{
        type:String,
        require:true
    }
},{Timestamp:true})

export const Customerdeatials = mongoose.model('Customerdeatials',customerSchema)



