import express from "express"
import { userLogin,userReg } from "../controllers/userControllre.js"

const userRoute = express.Router();

userRoute.post("/login",userLogin)
userRoute.post("/register",userReg)

export default userRoute;