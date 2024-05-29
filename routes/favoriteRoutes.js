import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { toggleFavoriteController } from "../controllers/BadgeCart/toggleFavoriteController.js";
import { getFavoritesController } from "../controllers/BadgeCart/getFavoritesController.js";
const router = express.Router();

router.post(
  "/toggle-favorite/:productId",
  verifyToken,
  toggleFavoriteController
);

router.get("/get-favorites", verifyToken, getFavoritesController);
export default router;
