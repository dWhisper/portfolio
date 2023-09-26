import { Box } from "../wrapped-icons/shapes/Box";
import { Circle } from "../wrapped-icons/shapes/Circle";
import { CircleFilled } from "../wrapped-icons/shapes/CircleFilled";
import { MinusCircle } from "../wrapped-icons/shapes/MinusCircle";
import { MinusCircleFilled } from "../wrapped-icons/shapes/MinusCircleFilled";
import { PlusCircle } from "../wrapped-icons/shapes/PlusCircle";
import { PlusCircleFilled } from "../wrapped-icons/shapes/PlusCircleFilled";

const ShapeIconCollection = new Map();

ShapeIconCollection.set("Empty", Box);
ShapeIconCollection.set("Box", Box);
ShapeIconCollection.set("Circle", Circle);
ShapeIconCollection.set("CircleFilled", CircleFilled);
ShapeIconCollection.set("MinusCircle", MinusCircle);
ShapeIconCollection.set("MinusCircleFilled", MinusCircleFilled);
ShapeIconCollection.set("PlusCircle", PlusCircle);
ShapeIconCollection.set("PlusCircleFilled", PlusCircleFilled);

export { ShapeIconCollection };
