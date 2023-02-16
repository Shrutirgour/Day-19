import express from "express";
import passport from "passport";

import {
  deleteOrderDataById,
  addUserOrderData,
  getUserSingleOrderData,
  getUserAllOrderData,
} from "../controllers/orderController.js";

import "../lib/passport.js";

export const orderRoutes = express.Router();

orderRoutes.use(passport.authenticate("jwt", { session: false }));

orderRoutes.post("/orders", addUserOrderData);
orderRoutes.get("/orders/:id", getUserSingleOrderData);
orderRoutes.get("/orders", getUserAllOrderData);
orderRoutes.delete("/orders/:id", deleteOrderDataById);
