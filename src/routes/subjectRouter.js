import { Router } from "express";
import subjectController from "../controllers/subjectController.js";
import checkAuth from "../middleware/authMiddleware.js";
import { subjectValidations } from "../validations.js";
import handleValidationError from "../middleware/handleValidationError.js";

const subjectRouter = Router();

subjectRouter.get("/subjects", subjectController.getSubjects);
subjectRouter.get("/subjects/:id", subjectController.getOneSubject);
subjectRouter.post(
  "/subjects",
  subjectValidations,
  handleValidationError,
  subjectController.createSubject
);
subjectRouter.put(
  "/subjects",
  subjectValidations,
  handleValidationError,
  subjectController.updateSubject
);
subjectRouter.delete("/subjects/:id", subjectController.deleteSubject);

export default subjectRouter;
