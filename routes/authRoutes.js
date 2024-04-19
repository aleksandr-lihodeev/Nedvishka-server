import express from "express";
import {registerController} from "../controllers/auth/registerController.js";
import {registerValidator} from "../validators/registerValidator.js";
import {errorsValidation} from "../middlewares/errorValidation.js";
import {loginValidator} from "../validators/loginValidator.js";
import {loginController} from "../controllers/auth/loginController.js";

const router = express.Router();

router.post("/register", registerValidator, errorsValidation, registerController);
router.post('/login',loginValidator,errorsValidation,loginController)


export default router;
