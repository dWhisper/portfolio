import { Bank } from "../wrapped-icons/ecom/Bank";
import { Basket } from "../wrapped-icons/ecom/Basket";
import { Bitcoin } from "../wrapped-icons/ecom/Bitcoin";
import { Cart } from "../wrapped-icons/ecom/Cart";
import { Coin } from "../wrapped-icons/ecom/Coin";
import { CreditCard } from "../wrapped-icons/ecom/CreditCard";
import { CreditCardAlt } from "../wrapped-icons/ecom/CreditCardAlt";
import { Gift } from "../wrapped-icons/ecom/Gift";
import { Money } from "../wrapped-icons/ecom/Money";
import { PriceCut } from "../wrapped-icons/ecom/PriceCut";
import { Box } from "../wrapped-icons/shapes/Box";

const EcomIconCollection = new Map();

EcomIconCollection.set("Empty", Box);

EcomIconCollection.set("Bank", Bank);
EcomIconCollection.set("Basket", Basket);
EcomIconCollection.set("Bitcoin", Bitcoin);
EcomIconCollection.set("Cart", Cart);
EcomIconCollection.set("Coin", Coin);
EcomIconCollection.set("CreditCard", CreditCard);
EcomIconCollection.set("CreditCardAlt", CreditCardAlt);
EcomIconCollection.set("Gift", Gift);
EcomIconCollection.set("Money", Money);
EcomIconCollection.set("PriceCut", PriceCut);

export { EcomIconCollection };
