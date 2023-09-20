import { Box } from "../wrapped-icons/shapes/Box";
import { Bicycle } from "../wrapped-icons/transportation/Bicycle";
import { Boat } from "../wrapped-icons/transportation/Boat";

const TransportationIconCollection = new Map();

TransportationIconCollection.set("Empty", Box);

TransportationIconCollection.set("Bicycle", Bicycle);
TransportationIconCollection.set("Boat", Boat);

export { TransportationIconCollection };
