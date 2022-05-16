import Joi from "joi";
import { CreateUserData, LoginUserData } from "../repositories/userRepository";

const register = Joi.object<CreateUserData>({
  email: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required()
});

const login = Joi.object<LoginUserData>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const userSchemas = {
  register,
  login
};
