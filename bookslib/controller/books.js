import { Book } from "../models/book.js";
let books = [];

export const getbook = (req, res) => {
  //console.log("hii..")
  console.log(req.query);

  if (req.query.author && req.query.bookname) {
    getbookbyauthorandbookname(req, res);
  } else if (req.query.author) {
    getbookbyauthor(req, res);
  } else {
    console.log("in getbook");
    //res.send(books)
    Book.find()
      .then((result) => {
        console.log("logg: " + result);
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const getbookById = (req, res) => {
  console.log("on getbookbyid");
  Book.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createbook = (req, res) => {
  console.log("in creatuser");
  //books.push(req.body)
  const book = new Book({
    author: req.body.author,
    bookname: req.body.bookname,
    available: req.body.available,
  });
  //res.send("ok")
  book
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
export const deletebookById = (req, res) => {
  console.log("in deletebookbyid");
  Book.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const updatebookById = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, {
    author: req.body.author,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getbookbyauthor = (req, res) => {
  Book.aggregate(
    [{ $match: { author: req.query.author } }] // [{$match : {"author" : "kant"}}]
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getbookbyauthorandbookname = (req, res) => {
  Book.aggregate(
    [
      {
        $match: {
          $and: [
            { author: req.query.author },
            { bookname: req.query.bookname },
          ],
        },
      },
    ] 
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
