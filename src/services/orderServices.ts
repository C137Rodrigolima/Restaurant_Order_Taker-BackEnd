import { OrderRepositories } from "../repositories/orderRepository.js"

async function createOrder(table: string, optionsIds: number[], userId: number){
  await OrderRepositories.create(table, userId);
  
  const order = await OrderRepositories.findByUserId(userId);

  let arrayIds = [];
  for(let i=0; i<optionsIds.length; i++){
    arrayIds
    .push({optionId: optionsIds[i], orderId: order[0].id})
  }

  await OrderRepositories.createMany(arrayIds);
}

async function getClientOrder(userId: number){
  const clientOrder = await OrderRepositories.find(userId);
  return clientOrder;
}

async function getAllOrders(){
  const clientOrder = await OrderRepositories.findMany();
  return clientOrder;
}

async function updateOrder(orderId: number){
  const order = OrderRepositories.findById(orderId, false);
  if(!order) return false;

  await OrderRepositories.update(orderId);

  const updatedOrder = OrderRepositories.findById(orderId, true);
  if(!updatedOrder){
    return false;
  } else return true;
}

export const OrderServices = {
  createOrder,
  getClientOrder,
  getAllOrders,
  updateOrder
}