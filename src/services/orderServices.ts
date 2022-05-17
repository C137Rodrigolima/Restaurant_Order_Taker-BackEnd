import { OrderRepositories } from "../repositories/orderRepository.js"

async function createOrder(table: string, optionsIds: number[], userId: number){
  await OrderRepositories.create(table, userId);
  
  const order = await OrderRepositories.findUnique(userId);
  console.log(order);

  let arrayIds = [];
  for(let i=0; i<optionsIds.length; i++){
    arrayIds
    .push({optionId: optionsIds[i], orderId: order[0].id})
  }

  await OrderRepositories.createMany(arrayIds);
}

export const OrderServices = {
  createOrder
}