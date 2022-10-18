import { Cat } from "./cat";
import { Request, Response } from "express";

export const getCat = (req: Request, res: Response) => {
    res.json(Cat);
};

export const getOneCat = (req: Request, res: Response) => {
    res.json(
        Cat.find((cat) => {
            return cat.id === req.params.id;
        })
    );
};

export const createCat = (req: Request, res: Response) => {
    Cat.push(req.body);

    res.json(req.body);
};

export const updateCat = (req: Request, res: Response) => {
    const cat = Cat.find((cat) => {
        return cat.id === req.params.id;
    });

    if (cat) {
        cat.name = req.body.name;

        res.json(cat);
    } else {
        res.status(404).send("데이터를 찾을수 없습니다.");
    }
};

export const deleteCat = (req: Request, res: Response) => {
    const temp = Cat.filter((cat) => {
        return cat.id !== req.params.id;
    });

    res.json(temp);
};
