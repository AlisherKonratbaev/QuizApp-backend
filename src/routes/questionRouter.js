import { Router } from "express";
import questionController from "../controllers/questionController.js";

const questionRouter = Router();

questionRouter.get("/questions", questionController.getAll);
questionRouter.get("/questions/:subject_id", questionController.getQuestions);
questionRouter.get("/questions/count/:subject_id", questionController.getCount);
questionRouter.post("/questions", questionController.createQuestion);
questionRouter.delete("/questions/:id", questionController.deleteQuestion);
questionRouter.put("/questions", questionController.updateQuestion);

export default questionRouter;