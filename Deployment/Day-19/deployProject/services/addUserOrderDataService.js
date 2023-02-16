import { Order } from "../models/order.js";

export const addUserOrderDataService = async (request) => {
  const { id } = request.user;
  const { price, products } = request.body;

  try {
    const order = await Order.create({ userId: id, price, products });
    if (!order) {
      return {
        message: "order not created"
      }
    }
    return {
      message: "order created",
      ...order.dataValues
    }
  } catch (error) {
    return {
      message: error.message
    }
  }
}