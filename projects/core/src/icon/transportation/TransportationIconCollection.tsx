import { Box } from "../wrapped-icons/shapes/Box";
import { Bicycle } from "../wrapped-icons/transportation/Bicycle";
import { Boat } from "../wrapped-icons/transportation/Boat";
import { Globe } from "../wrapped-icons/transportation/Globe";
import { Health } from "../wrapped-icons/transportation/Health";
import { Lifesaver } from "../wrapped-icons/transportation/Lifesaver";
import { Location } from "../wrapped-icons/transportation/Location";
import { MapIcon } from "../wrapped-icons/transportation/MapIcon";
import { MapPin } from "../wrapped-icons/transportation/MapPin";

const TransportationIconCollection = new Map();

TransportationIconCollection.set("Empty", Box);

TransportationIconCollection.set("Bicycle", Bicycle);
TransportationIconCollection.set("Boat", Boat);
TransportationIconCollection.set("Globe", Globe);
TransportationIconCollection.set("Health", Health);
TransportationIconCollection.set("Lifesaver", Lifesaver);
TransportationIconCollection.set("Location", Location);
TransportationIconCollection.set("Map", MapIcon);
TransportationIconCollection.set("MapPin", MapPin);

export { TransportationIconCollection };
