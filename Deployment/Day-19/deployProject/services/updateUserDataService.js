import { Sequelize } from "sequelize";
import { User } from "../models/user.js";

export const updateUserDataService = async (request) => {
  const { id } = request.user.dataValues;
  const { name, city, education } = request.body;
  const updatedUser = {};

  if (name) {
    updatedUser.name = name;
  }
  if (city) {
    updatedUser.city = city;
  }
  if (education) {
    updatedUser.education = education;
  }
  try {
    const updatedData = await User.update(updatedUser, {
      where: {
        id,
      }
    });
    if(updatedData) {
      return("Data updated Successfully");
    } else {
      return("Error! unable to update Data");
    }

  } catch (error) {
    return error.message;
  }
}
