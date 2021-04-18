import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productSchema = new Schema({
    product:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Product = mongoose.model('Product',productSchema)