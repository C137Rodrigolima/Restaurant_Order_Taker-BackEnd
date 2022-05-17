import { prisma } from "../database.js";

async function findMany(){
  return await prisma.option.findMany({});
};

export const OptionsRepositories = {
  findMany
};