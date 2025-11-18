import { create } from "domain";
import { omit } from "zod/mini";

export interface Burger {
    id:number,
    name: string,
    price:number,
    ingredients: string[];
}

let burges: Burger[] = [
    {
        id: 1,
        name: "Darth Vader Smash",
        price: 29.9,
        ingredients: ["pão brioche", "carne smash", "queijo", "molho secreto"],
    }
];

export const BurgerService = { 
    findAll() {
        return burges;
    },

        create(data: Omit<Burger, "id">) {
            const newBurger: Burger =  {
                id: burges.length + 1,
                ...data
            };
            burges.push(newBurger);
            return newBurger;
    }
};

