import { Box } from "../wrapped-icons/shapes/Box";
import { AlignBottom } from "../wrapped-icons/direction/AlignBottom";
import { AlignHorizontalCenter } from "../wrapped-icons/direction/AlignHorizontalCenter";
import { AlignLeft } from "../wrapped-icons/direction/AlignLeft";
import { AlignRight } from "../wrapped-icons/direction/AlignRight";
import { AlignToBottom } from "../wrapped-icons/direction/AlignToBottom";
import { AlignToMiddle } from "../wrapped-icons/direction/AlignToMiddle";
import { AlignToTop } from "../wrapped-icons/direction/AlignToTop";
import { AlignTop } from "../wrapped-icons/direction/AlignTop";
import { Ascending } from "../wrapped-icons/direction/Ascending";
import { AlignVerticalCenter } from "../wrapped-icons/direction/AlignVerticalCenter";

const DirectionIconCollection = new Map();

DirectionIconCollection.set("Empty", Box);

DirectionIconCollection.set("AlignHorizontalCenter", AlignHorizontalCenter);
DirectionIconCollection.set("AlignVerticalCenter", AlignVerticalCenter);
DirectionIconCollection.set("AlignBottom", AlignBottom);
DirectionIconCollection.set("AlignLeft", AlignLeft);
DirectionIconCollection.set("AlignRight", AlignRight);
DirectionIconCollection.set("AlignToBottom", AlignToBottom);
DirectionIconCollection.set("AlignToMiddle", AlignToMiddle);
DirectionIconCollection.set("AlignToTop", AlignToTop);
DirectionIconCollection.set("AlignTop", AlignTop);
DirectionIconCollection.set("Ascending", Ascending);

export { DirectionIconCollection };
