import { Sequelize } from "sequelize";
import { User } from "../models/user.js";

export const deleteUserDataService = async (request) => {
  const { id } = request.user;
  try {
    const deletedData = await User.destroy({
      where: {
        id
      }
    });

    if (deletedData) {
      return {
        message: "Data deleted successfully",
      }
    } else {
      return {
        message: "Error! uble to delete Data"
      }
    }
  } catch (error) {
    return error.message;
  }
}
