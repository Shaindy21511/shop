import { Router } from "express";
import {addOrder,getOrderById,getOrderByUserId,getAllOrder} from "../controler/Order.js";

const router = Router();
router.get("/", getAllOrder);
router.get("/byUserId/:userid",getOrderByUserId );
router.get("/:id", getOrderById);
router.post("/", addOrder);

export default router;
