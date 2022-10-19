import { createCat, deleteCat, getCats, updateCat } from "@src/app.service";
import { Cat } from "@src/cat";
import { Router } from "express";

const router = Router();

router.get("/", getCats);

router.post("/", createCat);

router.put("/:id", updateCat);

router.delete("/", deleteCat);

export default router;
