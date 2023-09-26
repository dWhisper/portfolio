import { Box } from "../wrapped-icons/shapes/Box";
import { Bicycle } from "../wrapped-icons/transportation/Bicycle";
import { Boat } from "../wrapped-icons/transportation/Boat";
import { MapPin } from "../wrapped-icons/transportation/MapPin";

const TransportationIconCollection = new Map();

TransportationIconCollection.set("Empty", Box);

TransportationIconCollection.set("Bicycle", Bicycle);
TransportationIconCollection.set("Boat", Boat);
TransportationIconCollection.set("MapPin", MapPin);

export { TransportationIconCollection };
