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