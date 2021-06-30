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
            res.status(201).send(result)
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

export const deleteTutorialById = (req,res) =>{
    Tutorials.destroy(
        {where :{id:req.params.id}}
    )
    .then(
        (result) => {
            if(result == 1){
                res.status(200).send({
                    message : "tutorial has delete"
                })
            } 
            else{
                res.status(422).send({
                    message : "this id doesnt exist in table"
                })
            }
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


export const deleteTutorials = (req,res) => {
    Tutorials.destroy(
        {
            where : {},
            truncate : false
        }
        
    )
    .then(
        (result) => {
                res.status(200).send({
                    message : `${result} tutorial has delete`
                })
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


export const updateTutorialById = (req,res) => {
    Tutorials.update(req.body,{
        where : {id:req.params.id}
    })   
    .then(
        (result) => {
            if(result == 1){
                res.status(200).send({
                    message : "tutorial has update"
                })
            } 
            else{
                res.status(422).send({
                    message : "this id doesnt exist in table"
                })
            }
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


export const getTutorialByID = (req,res) => {
    Tutorials.findByPk(req.params.id)
    .then(
        (result) => res.send(result)
    )
    .catch(
        (err) => res.status(500).send(err)
    )
}