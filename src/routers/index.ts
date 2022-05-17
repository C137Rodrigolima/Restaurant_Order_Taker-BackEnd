import { Router } from "express";
import optionRouter from "./optionRouter.js";
import orderRouter from "./orderRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(optionRouter);
router.use(orderRouter);

export default router;