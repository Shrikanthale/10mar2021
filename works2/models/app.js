import mongoose from 'mongoose'

const Schema = mongoose.Schema

const grocerySchema = new Schema({
    groceryItem:{
        type:String,
        require:true
    },
    isPurchesed:{
        type:String,
        require:true,
    },
    
},{Timestamp:true})

export const Grocerydeatials = mongoose.model('grocerydeatials',grocerySchema)



