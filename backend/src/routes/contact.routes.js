import express from "express";
import { verifyToken } from "../middleware/auth.middleware.js";
import {
  submitContact,
  getContacts,
  deleteContact,
  getLogs,
  updateStatus,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", submitContact);
router.get("/", verifyToken, getContacts);
router.delete("/:id", verifyToken, deleteContact);
router.patch("/:id/status", verifyToken, updateStatus);
router.get("/logs/all", verifyToken, getLogs);

export default router;
