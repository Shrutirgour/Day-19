import { loginUserDataService } from '../services/loginUserService.js';
import { getUserDataService } from '../services/getUserDataService.js';
import { addUserDataService } from '../services/addUserDataService.js';
import { updateUserDataService } from '../services/updateUserDataService.js';
import { deleteUserDataService } from '../services/deleteUserDataService.js';
import { deleteUserDataByIdService } from '../services/deleteUserDataByIdService.js';

export const loginUser = async (request, response) => {
  const { emailId, password } = request.body;

  if (!emailId || !password) {
    return response.send({ error: "Email Id and password are required fields" });
  }

  const result = await loginUserDataService(request);
  if (result) {
    response.send(result);
  } else {
    response.send(" Error! Unable to Fetch Data.")
  }
}

export const getUserData = async (request, response) => {
  const result = await getUserDataService(request);
  if (result) {
    response.send(result);
  } else {
    response.send(" Error! Unable to Fetch Data.")
  }
}

export const addUserData = async (request, response) => {
  const { emailId, password, name, city, education } = request.body;

  if (!name || !emailId || !password || !city || !education) {
    response.send(" All fields are required!");
  }

  const result = await addUserDataService(request);
  if (result) {
    response.send(result);
  } else {
    response.send(" Error! Unable to Add Data.")
  }
}

export const updateUserData = async (request, response) => {
  const result = await updateUserDataService(request);
  if (result) {
    response.send(result);
  } else {
    response.send(" Error! Unable to Update Data.")
  }
}

export const deleteUserData = async (request, response) => {
  const result = await deleteUserDataService(request);
    response.send(result);
}

export const deleteUserDataById = async (request, response) => {
  const { id: userId } = request.params;
  if(!userId) {
    response.send("Please Enter Valid Id");
  }
  const result = await deleteUserDataByIdService(request);
    response.send(result);
}
