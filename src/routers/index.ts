import { Router } from "express";
import optionRouter from "./optionRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(optionRouter);

export default router;