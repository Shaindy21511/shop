import { Router } from "express";
import {add,updateById,deleteById,getByCategories,getAllproducts} from "../controler/Product.js"

const router = Router();
router.get("/", getAllproducts)
router.get("/:category", getByCategories)
router.delete("/:id", deleteById)
router.put("/:id", updateById)
router.post("/", add)

export default router;
