import { Cat } from "@src/cat";
import { Request, Response } from "express";

export const getCats = (req: Request, res: Response) => {
    res.json(Cat);
};

export const createCat = (req: Request, res: Response) => {
    Cat.push(req.body);

    res.json(req.body);
};

export const updateCat = (req: Request, res: Response) => {
    Cat.forEach((cat) => {
        if (cat.id === req.params.id) {
            cat.name = req.body.name;
        }
    });

    res.json(
        Cat.find((cat) => {
            return cat.id === req.params.id;
        })
    );
};

export const deleteCat = (req: Request, res: Response) => {
    const newCat = Cat.filter((cat) => {
        return cat.id !== req.query.catId;
    });

    res.json(newCat);
};
