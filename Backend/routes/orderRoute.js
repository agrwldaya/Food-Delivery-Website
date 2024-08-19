import express from "express"
import { placeOrder,verifyOrder } from "../controllers/orderController.js"
import authMiddleware from "../middleware/auth.js";

const orderRoute = express.Router();


orderRoute.post('/order',authMiddleware,placeOrder);
orderRoute.post('/order/verify',verifyOrder);


export default orderRoute;