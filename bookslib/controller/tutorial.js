import db from '../models/bookindex.js';
const Tutorials = db.tutorials;
const op = db.Sequelize.op;

export const getAllTutorialsByTitle = (req,res) =>{
     const title = req.query.title
     var condition = title ? {title:{[op.ilike]:`%${title}`}}:null;
     
     
   Tutorials.findAll({ where : condition })
   .then(data => {
       res.send(data)
   })

   .catch(err => {
       res.status(500).send(
           {
               message:err.message || "someerror occured while retiving tutiorial"
           }
       )
   })
};

export const createTutorial = (req, res) => {
    if(req.body.title == null || req.body.description == null || req.body.published == null){
        res.status(400).send({
          message : "Insufficant data ... plz try again"
        })
    }
    const tutorial = {
        title : req.body.title,
        published : req.body.published ? req.body.published : false,
        description : req.body.description
    }
    Tutorials.create(tutorial)
    .then(
        (result) => {
            res.send(201).send(result)
        }
    )
    .catch(
        (err) => {
            res.status(500).send({
                message : err || "Internal DB error"
            })
        }
    )
}    