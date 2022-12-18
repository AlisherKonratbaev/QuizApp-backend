import { Router } from "express";
import examController from "../controllers/examController.js";

const examRouter = Router();

examRouter.get("/exams", examController.getAll);
examRouter.get("/exams/:id", examController.getOne);
examRouter.post("/exams", examController.create);
examRouter.delete("/exams/:id", examController.delete);
examRouter.put("/exams", examController.update);

export default examRouter;