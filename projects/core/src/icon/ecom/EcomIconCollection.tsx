import { Box } from "../wrapped-icons/shapes/Box";
import { Bank } from "../wrapped-icons/ecom/Bank";
import { Basket } from "../wrapped-icons/ecom/Basket";
import { Bitcoin } from "../wrapped-icons/ecom/Bitcoin";

const EcomIconCollection = new Map();

EcomIconCollection.set("Empty", Box);

EcomIconCollection.set("Bank", Bank);
EcomIconCollection.set("Basket", Basket);
EcomIconCollection.set("Bitcoin", Bitcoin);

export { EcomIconCollection };
