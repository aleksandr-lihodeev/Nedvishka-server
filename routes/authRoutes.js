import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js"
import {registerController} from "../controllers/auth/registerController.js";
import {registerValidator} from "../validators/registerValidator.js";
import {errorsValidation} from "../middlewares/errorValidation.js";
import {loginValidator} from "../validators/loginValidator.js";
import {loginController} from "../controllers/auth/loginController.js";
import {getProfileInfoController} from "../controllers/auth/getProfileInfoController.js"
const router = express.Router();

router.post("/register", registerValidator, errorsValidation, registerController);
router.post('/login',loginValidator,errorsValidation,loginController)
router.get("/get/user" ,verifyToken ,getProfileInfoController)

export default router;
