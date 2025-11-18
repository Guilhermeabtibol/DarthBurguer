import { Request, Response } from "express";
import { BurgerService } from "../services/burgers.service";

export const BurgersController = {
    list(req: Request, res: Response) {
        const all = BurgerService.findAll();
        return res.json(all);
    },

    create(req: Request, res: Response) {
        const { name, price, ingredients } = req.body;

        if (!name || !price) {
            return res.status(400).json({
                error: "Precisamos do nome e do preço"
            });
        }

        const burger = Burgergit add .
Service.create({ name, price, ingredients });
        return res.status(201).json(burger);
    }
};
