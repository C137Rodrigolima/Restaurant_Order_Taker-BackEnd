import { prisma } from "../database.js";

async function create(table: string,  userId: number){
  return await prisma.order.create({
    data: {
      table: table,
      userId: userId
    }
  });
};

async function findUnique(userId: number){
  return await prisma.order.findMany({
    where: {
      userId: userId,
      done: false
    }
  })
}

async function createMany(arrayIds: any){
  return await prisma.optionOrder.createMany({
    data: arrayIds
  })
}

export const OrderRepositories = {
  create,
  findUnique,
  createMany
};