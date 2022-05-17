import { Router } from "express";
import { OptionsController } from "../controllers/optionController.js";

const optionRouter = Router();

optionRouter.get("/options", OptionsController.get);

export default optionRouter;