import { Sequelize } from "sequelize";
import { Order } from "../models/order.js";
import { User } from "../models/user.js";

export const deleteOrderDataByIdService = async (request) => {
  const { id: userId } = request.user;
  const { id: orderId } = request.params;
 
  try {
    const deletedData = await Order.destroy({
      where: {
        id: userId,
        id: orderId,
      },
    });

    if (deletedData) {
      return {
        message: "Data deleted successfully"
      };
    } else {
      return {
        message: "Error! unable to delete Data"
      };
    }
  } catch (error) {
    return error.message;
  }
};
