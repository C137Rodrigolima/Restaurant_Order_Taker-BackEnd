import Joi from "joi";
import { CreateUserData, LoginData } from "../repositories/userRepository";

const register = Joi.object<CreateUserData>({
  email: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required()
});

const login = Joi.object<LoginData>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const userSchemas = {
  register,
  login
};
