import express from "express";
import { getAbout } from "../controllers/about.controller.js";

const router = express.Router();

router.get("/", getAbout);

export default router;
