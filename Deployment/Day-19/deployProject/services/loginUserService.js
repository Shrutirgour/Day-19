import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import dotenv from 'dotenv';
dotenv.config();

export const loginUserDataService = async (request) => {
  const { emailId, password } = request.body;

  try {
    const user = await User.findOne({ where: { emailId, password }, });
    console.log(user);
    if (!user) {
      return { error: "User not found" };
    }

    const payload = {
      emailId: user.emailId,
    }

    const token = jwt.sign(payload, process.env.SECRET_TOKEN_KEY, {
      expiresIn: process.env.EXPIRES_IN
    });
    return {
      message: "Token generated!",
      token
    };

  } catch (error) {
    return (error.message);
  }
}
