import { Sequelize } from "sequelize";
import { User } from "../models/user.js";

export const getUserDataService = async (request) => {
  const { id } = request.user;
  try {
    const allUsers = await User.findOne({ where: id });
    return allUsers;
  } catch (error) {
    return error.message;
  }
}


