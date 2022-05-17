import { Router } from "express";
import { OrdersControllers } from "../controllers/orderController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const orderRouter = Router();

orderRouter.post(
  "/order", 
  ensureAuthenticatedMiddleware, 
  OrdersControllers.postOrder
);

export default orderRouter;