import { Cat } from "@src/cat";
import { Request, Response } from "express";

export const getCat = (req: Request, res: Response) => {
  res.send(Cat);
};

export const createCat = (req: Request, res: Response) => {
  Cat.push(req.body.cat);

  res.send(Cat);
};
