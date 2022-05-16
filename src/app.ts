import cors from "cors";
import Express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import router from "./routers/index.js";
import {errorHandlerMiddleware} from "./middlewares/errorHandlerMiddleware.js";
dotenv.config();

const app = Express();
app.use(Express.json());
app.use(cors());

app.use(router)
app.use(errorHandlerMiddleware);

export default app;