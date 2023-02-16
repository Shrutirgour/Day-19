import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { User } from "../models/user.js";
import dotenv from 'dotenv';
dotenv.config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_TOKEN_KEY
}

passport.use(new Strategy(opts, async function (jwt_payload, done) {
  try {
    const user = await User.findOne({
      where: {
        emailId: jwt_payload.emailId
      }
    });
    if (!user) {
      return done(error, false);
    } else {
      return done(null, user);
    }
  } catch (error) {
    console.log(error.message);
  }
}));