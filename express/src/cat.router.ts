import { Cat } from "./cat";
import { Router } from "express";
import {
    createCat,
    deleteCat,
    getCat,
    getOneCat,
    updateCat,
} from "./cat.service";

const router = Router();

router.get("/", getCat);

router.get("/:id", getOneCat);

router.post("/", createCat);

router.put("/:id", updateCat);

router.delete("/:id", deleteCat);

export default router;
