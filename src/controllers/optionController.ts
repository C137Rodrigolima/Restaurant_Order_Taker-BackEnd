import { Request, Response } from "express";
import { OptionServices } from "../services/optionServices.js";

async function get(req: Request, res: Response){
  const options = await OptionServices.getAll();

  res.send(options);
}

export const OptionsController = {
  get
}