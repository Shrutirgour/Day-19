import { Sequelize } from "sequelize";
import { User } from "../models/user.js";

export const deleteUserDataByIdService = async (request) => {
  const { id } = request.params;
  
  try {
    const deletedData = await User.destroy({
      where: {
        id,
      }
    });

    if (deletedData) {
      return {
        message: "Data deleted successfully",
      }
    } else {
      return {
        message: "Error! unable to delete Data"
      }
    }
  } catch (error) {
    return error.message;
  }
}
