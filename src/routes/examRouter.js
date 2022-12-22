import { Router } from "express";
import examController from "../controllers/examController.js";
import { examValidations } from "../validations.js";
import handleValidationError from "../middleware/handleValidationError.js";

const examRouter = Router();

examRouter.get("/exams", examController.getAll);
examRouter.get("/exams/:id", examController.getOne);
examRouter.post(
  "/exams",
  examValidations,
  handleValidationError,
  examController.create
);
examRouter.delete("/exams/:id", examController.delete);
examRouter.put(
  "/exams",
  examValidations,
  handleValidationError,
  examController.update
);

export default examRouter;
