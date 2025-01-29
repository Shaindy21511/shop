import { Router } from "express";
import {getAllUsers,getUserById,update,payFine,addUserSignUp,getUserByUserNamePasswordLogin} from "../controler/User.js"

const router = Router();
router.get("/",getAllUsers);
router.get("/:id",getUserById);
router.put("/:id",update);
router.put("/pay/:id",payFine);
router.post("/",addUserSignUp);
router.post("/login",getUserByUserNamePasswordLogin);

export default router;





