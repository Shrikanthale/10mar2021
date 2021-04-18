import {Author} from '../models/author.js'
let authors = []

export const getAuthor= (req,res)=>{
    
    getall(req,res)
}

const getall = (req,res) => {
    Author.aggregate([{$project:{_id:0,queotes:1,author:1}}
    ])
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

export const createAuthor = (req,res) => {
    console.log("welcome to createuser")
    //authors.push(req.body)
    
    res.send({"result" : "sucessfully"})
    const authors = new Author({
        queotes:req.body.queotes,
        author:req.body.author

    })
    authors.save()
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