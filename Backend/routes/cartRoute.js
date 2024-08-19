import express from "express"
const cartRoute = express.Router();

import { addItem,removeItem,getItem,deleteItem } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

cartRoute.post('/additem',authMiddleware, addItem);
cartRoute.post('/removeitem',authMiddleware,removeItem);
cartRoute.post('/deleteitem',authMiddleware,deleteItem);
cartRoute.get('/getitem',authMiddleware,getItem);



export default cartRoute;