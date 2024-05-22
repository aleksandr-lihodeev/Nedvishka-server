import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { registerController } from "../controllers/auth/registerController.js";
import { registerValidator } from "../validators/registerValidator.js";
import { errorsValidation } from "../middlewares/errorValidation.js";
import { loginValidator } from "../validators/loginValidator.js";
import { loginController } from "../controllers/auth/loginController.js";
import { getProfileInfoController } from "../controllers/auth/getProfileInfoController.js";
import { updateProfileImageController } from "../controllers/auth/updateProfileImageController.js";
import { deleteProfileImageController } from "../controllers/auth/deleteProfileImageController.js";

const router = express.Router();

router.post(
  "/register",
  registerValidator,
  errorsValidation,
  registerController
);
router.post("/login", loginValidator, errorsValidation, loginController);
router.get("/get/user", verifyToken, getProfileInfoController);
router.patch("/update/user-image", verifyToken, updateProfileImageController);
router.delete("/delete/user-image", verifyToken, deleteProfileImageController);

export default router;
