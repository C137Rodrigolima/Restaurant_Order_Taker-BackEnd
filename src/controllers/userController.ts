import { Request, Response } from "express";
import { userServices } from "../services/userServices.js";

async function signUp(req: Request, res: Response){
  const userData = req.body;

  await userServices.signUp(userData);

  res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
  const user = req.body;

  const token = await userServices.signIn(user);

  res.send(token);
}

async function admSignIn(req: Request, res: Response) {
  const admData = req.body;

  const token = await userServices.admsSignIn(admData);
  
  res.send(token);
}

export const userControllers = {
  signUp,
  signIn,
  admSignIn
}