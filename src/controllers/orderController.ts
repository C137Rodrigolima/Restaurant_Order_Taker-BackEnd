import { Request, Response } from "express";
import { OrderServices } from "../services/orderServices.js";

async function post(req: Request, res: Response){
  const { table, optionsIds } = req.body;
  const { user } = res.locals;

  await OrderServices.createOrder(table, optionsIds, user.id);
  res.sendStatus(201);
}

async function get(req: Request, res: Response){
  const { user } = res.locals;
  const order = await OrderServices.getClientOrder( user.id );

  res.send(order[0]);
}

async function getAll(req: Request, res: Response){
  const order = await OrderServices.getAllOrders();

  res.send(order);
}

export const OrdersControllers = {
  post,
  get,
  getAll
}