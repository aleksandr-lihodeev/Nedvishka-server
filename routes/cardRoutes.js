import express from "express";
import {getCardController} from "../controllers/card/getCardController.js";
import {addCardController} from "../controllers/card/addCardController.js";
import {deleteCardController} from "../controllers/card/deleteCardController.js";
import {verifyToken} from "../middlewares/verifyToken.js";
import {getOwnersCardsController} from "../controllers/card/getOwnersCardsController.js";

const router = express.Router();

router.get("/get", getCardController);
router.get("/getOwners",verifyToken, getOwnersCardsController);
router.post('/post',verifyToken,addCardController)
router.delete("/delete/:id",verifyToken,deleteCardController)

export default router;
