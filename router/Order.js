import { Router } from "express";
import {addOrder,getOrderById,getOrderByUserId,getAllOrder,updateOrder,deleteOrder} from "../controler/Order.js";

const router = Router();
router.get("/", getAllOrder);
router.get("/byUserId/:userId",getOrderByUserId );
router.get("/:orderId", getOrderById);
router.post("/", addOrder);
router.put("/:orderId", updateOrder);
router.delete("/:orderId", deleteOrder);




export default router;
