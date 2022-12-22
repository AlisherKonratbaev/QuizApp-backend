import { Router } from "express";
import questionController from "../controllers/questionController.js";
import { questionValidations } from "../validations.js";
import handleValidationError from "../middleware/handleValidationError.js";

const questionRouter = Router();

questionRouter.get("/questions", questionController.getAll);
questionRouter.get("/questions/:subject_id", questionController.getQuestions);
questionRouter.get("/questions/count/:subject_id", questionController.getCount);
questionRouter.post(
  "/questions",
  questionValidations,
  handleValidationError,
  questionController.createQuestion
);
questionRouter.delete("/questions/:id", questionController.deleteQuestion);
questionRouter.put(
  "/questions",
  questionValidations,
  handleValidationError,
  questionController.updateQuestion
);

export default questionRouter;
