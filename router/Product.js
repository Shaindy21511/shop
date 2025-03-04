import { Router } from "express";
import {add,updateById,deleteById,getByCategories,getAllproducts,getTotalProductPages} from "../controler/Product.js"

const router = Router();
router.get("/", getAllproducts)
router.get("/total", getTotalProductPages)
router.get("/:category", getByCategories)
router.delete("/:id", deleteById)
router.put("/:id", updateById)
router.post("/", add)

export default router;
