import express from 'express';
import passport from 'passport';
import {
  loginUser,
  getUserData,
  addUserData,
  updateUserData,
  deleteUserData,
  deleteUserDataById,
} from '../controllers/userController.js';


import '../lib/passport.js';

export const userRoutes = express.Router();

userRoutes.post('/users/login', loginUser);
userRoutes.post('/users/register', addUserData);

userRoutes.use(passport.authenticate("jwt", { session: false }))

userRoutes.get('/users', getUserData);
userRoutes.put('/users', updateUserData);
userRoutes.delete('/users', deleteUserData);
userRoutes.delete('/users/:id', deleteUserDataById);
