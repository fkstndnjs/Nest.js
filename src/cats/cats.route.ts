import { Cat } from "./cats.model";
import { Router } from "express";
import { createCat, getAllCats, getOneCat } from "./cats.service";

const router = Router();

router.get("/", getAllCats);

router.get("/:id", getOneCat);

router.post("/", createCat);

export default router;
