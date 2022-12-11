import { Router } from "express";
import subjectController from "../controllers/subjectController.js";

const subjectRouter = Router();

subjectRouter.get("/subjects", subjectController.getSubjects);
subjectRouter.get("/subjects/:id", subjectController.getOneSubject);
subjectRouter.post("/subjects", subjectController.createSubject);
subjectRouter.put("/subjects", subjectController.updateSubject);
subjectRouter.delete("/subjects/:id", subjectController.deleteSubject);

export default subjectRouter;
