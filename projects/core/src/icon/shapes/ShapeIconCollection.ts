import { Box } from "../wrapped-icons/shapes/Box";
import { Circle } from "../wrapped-icons/shapes/Circle";
import { CircleFilled } from "../wrapped-icons/shapes/CircleFilled";
import { MinusCircle } from "../wrapped-icons/shapes/MinusCircle";
import { MinusCircleFilled } from "../wrapped-icons/shapes/MinusCircleFilled";
import { PlusCircle } from "../wrapped-icons/shapes/PlusCircle";
import { PlusCircleFilled } from "../wrapped-icons/shapes/PlusCircleFilled";
import { Cross } from "../wrapped-icons/shapes/Cross";
import { Diamond } from "../wrapped-icons/shapes/Diamond";
import { EqualCircle } from "../wrapped-icons/shapes/EqualCircle";
import { EqualCircleFilled } from "../wrapped-icons/shapes/EqualCircleFilled";

const ShapeIconCollection = new Map();

ShapeIconCollection.set("Empty", Box);
ShapeIconCollection.set("Box", Box);
ShapeIconCollection.set("Circle", Circle);
ShapeIconCollection.set("CircleFilled", CircleFilled);
ShapeIconCollection.set("Cross", Cross);
ShapeIconCollection.set("Diamond", Diamond);
ShapeIconCollection.set("EqualCircle", EqualCircle);
ShapeIconCollection.set("EqualCircleFilled", EqualCircleFilled);
ShapeIconCollection.set("MinusCircle", MinusCircle);
ShapeIconCollection.set("MinusCircleFilled", MinusCircleFilled);
ShapeIconCollection.set("PlusCircle", PlusCircle);
ShapeIconCollection.set("PlusCircleFilled", PlusCircleFilled);

export { ShapeIconCollection };
