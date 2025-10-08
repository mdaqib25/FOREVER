import express from "express";
import {
  loginUser,
  RegisterUser,
  adminLogin,
} from "../controllers/userControllers.js";

// it will create one user router
const userRouter = express.Router();

userRouter.post("/register", RegisterUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

export default userRouter;
