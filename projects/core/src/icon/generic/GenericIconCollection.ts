import { Air } from "../wrapped-icons/generic/Air";
import { Alarm } from "../wrapped-icons/generic/Alarm";
import { Box } from "../wrapped-icons/shapes/Box";

const GenericIconCollection = new Map();

// Error State
GenericIconCollection.set("Empty", Box);

GenericIconCollection.set("Air", Air);
GenericIconCollection.set("Alarm", Alarm);

export { GenericIconCollection };
