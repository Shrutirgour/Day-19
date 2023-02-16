import { User } from "../models/user.js";
import { Order } from "../models/order.js";

export const getUserAllOrderDataService = async (request) => {
  const { id } = request.user;
  try {
    const user = await User.findOne({
      attributes: ["name", "emailId"],
      where: {
        id,
      },
      include: [
        { model: Order, attributes: ["price", "products"] },
      ],
    });
    if (!user) {
      return {
        message: error.message,
      };
    } else {
      return {
        user
      };
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};