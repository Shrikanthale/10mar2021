import express from 'express'
import {getAllTutorialsByTitle,createTutorial,deleteTutorialById,updateTutorialById,deleteTutorials} from '../controller/tutorial.js'


const router = express.Router();

router.get("/",getAllTutorialsByTitle)
//router.get("/:id",getTutorialByID)
router.post("/",createTutorial)
router.delete("/",deleteTutorials)
router.delete("/:id",deleteTutorialById)
router.put("/:id",updateTutorialById)


export default router