import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userServices } from "../services/userServices.js";
dotenv.config();

export async function ensureAdmAuthenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers["authorization"];
  if (!authorization) throw { type: "unauthorized" };

  const token = authorization.replace("Bearer ", "");
  const { admId } = jwt.verify(token, process.env.JWT_SECRET) as {
    admId: number;
  };

  const adm = await userServices.findAdmsById(admId);
  res.locals.adm = adm;

  next();
}