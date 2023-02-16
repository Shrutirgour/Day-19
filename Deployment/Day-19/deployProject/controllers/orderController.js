import { deleteOrderDataByIdService } from "../services/deleteOrderDataByIdService.js";
import { addUserOrderDataService } from "../services/addUserOrderDataService.js";
import { getUserSingleOrderDataService } from "../services/getUserSingleOrderDataService.js";
import { getUserAllOrderDataService } from "../services/getUserAllOrderData.js";

export const deleteOrderDataById = async (request, response) => {
  const { id: orderId } = request.params;
  if (!orderId) {
    response.send("Please Enter Valid Id");
  }
  const result = await deleteOrderDataByIdService(request);
  response.send(result);
};

export const addUserOrderData = async (request, response) => {
  const { price, products } = request.body;
  if (!products && !price) {
    response.send(" All fields are required!");
  }

  const result = await addUserOrderDataService(request);
  if (result) {
    response.send(result);
  } else {
    response.send(" Error! Unable to add Data.");
  }
};

export const getUserSingleOrderData = async (request, response) => {
  const { id: orderId } = request.params;
  if (!orderId) {
    response.send("Please Enter Valid Id");
  }

  const result = await getUserSingleOrderDataService(request);
  if (result) {
    response.send(result);
  } else {
    response.send(" Error! Unable to delete Data.");
  }
};

export const getUserAllOrderData = async (request, response) => {
  const result = await getUserAllOrderDataService(request);
  if (result) {
    response.send(result);
  } else {
    response.send(" Error! Unable to delete Data.");
  }
};
