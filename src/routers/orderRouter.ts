import { Router } from "express";
import { OrdersControllers } from "../controllers/orderController.js";
import { ensureAdmAuthenticatedMiddleware } from "../middlewares/ensureAdmAuthenticatedMiddleware .js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const orderRouter = Router();

orderRouter.post(
  "/order", 
  ensureAuthenticatedMiddleware, 
  OrdersControllers.post
);
orderRouter.get(
"/order/client", 
ensureAuthenticatedMiddleware, 
OrdersControllers.get
);
orderRouter.get(
  "/order/adm", 
  ensureAdmAuthenticatedMiddleware, 
  OrdersControllers.getAll
);

export default orderRouter;