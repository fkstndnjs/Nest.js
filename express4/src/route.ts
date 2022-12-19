import { createCat, getCat } from "@src/app.service";
import { Cat } from "@src/cat";
import express from "express";

const router = express.Router();

router.get("/", getCat);

router.post("/", createCat);

export default router;
