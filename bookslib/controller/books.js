import {Book} from '../models/book.js'
let books = []

export const getbook = (req,res) => {
    console.log("in getbook")
    //res.send(books)
    Book.find()
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

export const getbookById = (req,res) => {
    console.log("on getbookbyid")
    Book.findById(req.params.id)
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

export const createbook = (req,res) =>{
    console.log("in creatuser")
    //books.push(req.body)
    const book = new Book({
        author:req.body.author,
        bookname:req.body.bookname,
        available:req.body.available
    })
    //res.send("ok")
    book.save()
    .then(
        (result) => {
            res.send(result)
        }
    )
    .catch(
        (err) => {
            res.send(err)
        }
    )
}