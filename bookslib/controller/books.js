let books = []

export const getbook = (req,res) => {
    console.log("in getbook")
    res.send(books)
}

export const createbook = (req,res) =>{
    console.log("in creatuser")
    res.send("ok")
}