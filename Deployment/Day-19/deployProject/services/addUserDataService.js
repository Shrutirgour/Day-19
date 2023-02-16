import { Sequelize } from 'sequelize';
import { User } from '../models/user.js';

export const addUserDataService = async (request) => {
  const { emailId, password, name, city, education } = request.body;

  try {
    const existingUser = await User.findOne({ where: { emailId } });
    if (existingUser) {
      return { error: "User already exists" };
    }

    const user = await User.create({ emailId, password, name, city, education });
    if (!user) {
      return {
        message: "Unsuccessfull registration"
      }
    }
    else {
      return {
        message: 'Successful registration',
        ...user.dataValues
      };
    }
  } catch (error) {
    return error.message;
  }
}
