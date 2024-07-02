import express from "express";
import {
  getAllMessages,
//   getAllMessages,
  sendMessage,
} from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
// import { isAdminAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticated, getAllMessages);
// router.post("/send", sendMessage);
// router.get("/getall", isAdminAuthenticated, getAllMessages);

export default router;
