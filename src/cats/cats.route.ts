import { Cat } from "./cats.model";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    try {
        const cats = Cat;

        res.status(200).send({
            success: true,
            data: cats,
        });
    } catch (error) {
        console.log(error);

        res.status(400).send({
            success: false,
            data: error,
        });
    }
});

router.get("/:id", (req, res) => {
    try {
        const cats = Cat.find((cat) => {
            return cat.id === req.params.id;
        });

        res.status(200).send({
            success: true,
            data: cats,
        });
    } catch (error) {
        console.log(error);

        res.status(400).send({
            success: false,
            data: error,
        });
    }
});

router.post("/", (req, res) => {
    console.log(req.body);

    Cat.push(req.body);

    res.send(req.body);
});

export default router;
