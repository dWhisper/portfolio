import { Box } from "../wrapped-icons/shapes/Box";
import { Bank } from "../wrapped-icons/ecom/Bank";
import { Basket } from "../wrapped-icons/ecom/Basket";
import { Bitcoin } from "../wrapped-icons/ecom/Bitcoin";
import { Cart } from "../wrapped-icons/ecom/Cart";
import { Coin } from "../wrapped-icons/ecom/Coin";
import { CreditCard } from "../wrapped-icons/ecom/CreditCard";
import { CreditCardAlt } from "../wrapped-icons/ecom/CreditCardAlt";

const EcomIconCollection = new Map();

EcomIconCollection.set("Empty", Box);

EcomIconCollection.set("Bank", Bank);
EcomIconCollection.set("Basket", Basket);
EcomIconCollection.set("Bitcoin", Bitcoin);
EcomIconCollection.set("Cart", Cart);
EcomIconCollection.set("Coin", Coin);
EcomIconCollection.set("CreditCard", CreditCard);
EcomIconCollection.set("CreditCardAlt", CreditCardAlt);

export { EcomIconCollection };
