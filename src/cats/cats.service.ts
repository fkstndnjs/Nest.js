import { Cat } from "./cats.model";
import { Request, Response } from "express";

export const getAllCats = (req: Request, res: Response) => {
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
};

export const getOneCat = (req: Request, res: Response) => {
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
};

export const createCat = (req: Request, res: Response) => {
    console.log(req.body);

    Cat.push(req.body);

    res.send(req.body);
};
