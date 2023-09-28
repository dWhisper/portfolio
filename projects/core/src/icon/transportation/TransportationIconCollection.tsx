import { Box } from "../wrapped-icons/shapes/Box";
import { Bicycle } from "../wrapped-icons/transportation/Bicycle";
import { Boat } from "../wrapped-icons/transportation/Boat";
import { MapPin } from "../wrapped-icons/transportation/MapPin";
import { Globe } from "../wrapped-icons/transportation/Globe";
import { Health } from "../wrapped-icons/transportation/Health";

const TransportationIconCollection = new Map();

TransportationIconCollection.set("Empty", Box);

TransportationIconCollection.set("Bicycle", Bicycle);
TransportationIconCollection.set("Boat", Boat);
TransportationIconCollection.set("Globe", Globe);
TransportationIconCollection.set("Health", Health);
TransportationIconCollection.set("MapPin", MapPin);

export { TransportationIconCollection };
