import { Router } from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js"
import { loginValidations } from "../validations.js";
import handleValidationError from "../middleware/handleValidationError.js";
const authRouter = Router();

authRouter.post(
  "/login",
  loginValidations,
  handleValidationError,
  authController.login
);
authRouter.post(
  "/registration",
  loginValidations,
  handleValidationError,
  authController.register
);
authRouter.get("/users", authMiddleware, authController.getUsers);

export default authRouter;