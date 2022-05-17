import { Request, Response } from "express";
import { OrderServices } from "../services/orderServices.js";

async function postOrder(req: Request, res: Response){
  const { table, optionsIds } = req.body;
  const { user } = res.locals;

  const {body} = req;

  console.log(body, user);

  await OrderServices.createOrder(table, optionsIds, user.id);

  res.sendStatus(201);
}

export const OrdersControllers = {
  postOrder
}