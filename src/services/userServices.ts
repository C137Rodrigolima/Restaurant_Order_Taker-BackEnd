import { CreateUserData, LoginData } from "../repositories/userRepository.js";
import { UserRepository } from "../repositories/userRepository.js";
import { conflictError, unauthorizedError } from "../utils/errorUtils.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signUp(userData: CreateUserData){
  const existentUser = await UserRepository.findByEmail(userData.email);
  if(existentUser) 
  throw conflictError("User emails must be unique");

  const hashedPassword = bcrypt.hashSync(userData.password, 12);
  await UserRepository.insert({ ...userData, password: hashedPassword });
}

async function signIn(userData: LoginData){
  const user = await UserRepository.findByEmail(userData.email);
  if (!user) throw unauthorizedError("Invalid credentials");

  const validPassword = bcrypt.compareSync(userData.password, user.password);
  if (!validPassword) throw unauthorizedError("Invalid credentials");
    
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

async function admsSignIn(admData: LoginData){
  const adm = await UserRepository.findAdmByEmail(admData.email);

  if (!adm) throw unauthorizedError("Invalid credentials");

  const validPassword = bcrypt.compareSync(admData.password, adm.password);
  if (!validPassword) throw unauthorizedError("Invalid credentials");
    
  const token = jwt.sign({ admId: adm.id }, process.env.JWT_SECRET);

  return token;
}

async function findById(id: number) {
  const user = await UserRepository.findById(id);
  if (!user) throw { type: "not_found" };
  
  delete user.password;
  return user;
}

async function findAdmsById(id: number) {
  const user = await UserRepository.findAdmById(id);
  if (!user) throw { type: "not_found" };
  
  delete user.password;
  return user;
}

export const userServices = {
  signUp,
  signIn,
  admsSignIn,
  findById,
  findAdmsById
}