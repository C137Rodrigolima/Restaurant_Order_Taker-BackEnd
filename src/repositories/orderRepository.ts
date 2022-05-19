import { prisma } from "../database.js";

async function create(table: string,  userId: number){
  return await prisma.order.create({
    data: {
      table: table,
      userId: userId
    }
  });
};

async function findByUserId(userId: number){
  return await prisma.order.findMany({
    where: {
      userId: userId,
      done: false
    }
  })
}

async function findById(orderId: number, done: boolean){
  return await prisma.order.findMany({
    where: {
      id: orderId,
      done: done
    }
  })
}

async function find(userId: number){
  return await prisma.order.findMany({
    where: {
      userId: userId,
      done: false
    },
    include: {
      optionOrder: {
        include: {
          option: true,
        }
      }
    }
  })
}

async function findMany(){
  return await prisma.order.findMany({
    where: {
      done: false
    },
    include: {
      optionOrder: {
        include: {
          option: true,
        }
      }
    },
    orderBy: {
      id: "asc"
    }
  })
}

async function createMany(arrayIds: any){
  return await prisma.optionOrder.createMany({
    data: arrayIds
  })
}

async function update(orderId: number){
  return await prisma.order.update({
    where: {
      id: orderId
    },
    data: {
      done: true
    }
  })
}

export const OrderRepositories = {
  create,
  findByUserId,
  findById,
  find,
  findMany,
  createMany,
  update
};