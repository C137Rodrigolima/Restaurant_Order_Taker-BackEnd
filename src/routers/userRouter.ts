import { Router } from "express";
import { userControllers } from "../controllers/userController.js";

import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchemas } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post(
  "/register", 
  validateSchemaMiddleware(userSchemas.register), 
  userControllers.signUp
);
userRouter.post(
  "/login",
  validateSchemaMiddleware(userSchemas.login),
  userControllers.signIn
)

userRouter.post(
  "/adm/login",
  validateSchemaMiddleware(userSchemas.login),
  userControllers.admSignIn
)

export default userRouter;