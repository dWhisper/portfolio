import { Air } from "../wrapped-icons/generic/Air";
import { Alarm } from "../wrapped-icons/generic/Alarm";
import { Box } from "../wrapped-icons/shapes/Box";
import { Attach } from "../wrapped-icons/generic/Attach";
import { Backspace } from "../wrapped-icons/generic/Backspace";
import { BackspaceFill } from "../wrapped-icons/generic/BackspaceFill";
import { Bell } from "../wrapped-icons/generic/Bell";
import { Block } from "../wrapped-icons/generic/Block";
import { Book } from "../wrapped-icons/generic/Book";
import { BookOpen } from "../wrapped-icons/generic/BookOpen";
import { Briefcase } from "../wrapped-icons/generic/Briefcase";
import { Bug } from "../wrapped-icons/generic/Bug";
import { Cake } from "../wrapped-icons/generic/Cake";
import { Calculator } from "../wrapped-icons/generic/Calculator";
import { Calendar } from "../wrapped-icons/generic/Calendar";

const GenericIconCollection = new Map();

// Error State
GenericIconCollection.set("Empty", Box);

GenericIconCollection.set("Air", Air);
GenericIconCollection.set("Alarm", Alarm);
GenericIconCollection.set("Attach", Attach);
GenericIconCollection.set("Backspace", Backspace);
GenericIconCollection.set("BackspaceFilled", BackspaceFill);
GenericIconCollection.set("Bell", Bell);
GenericIconCollection.set("Block", Block);
GenericIconCollection.set("Book", Book);
GenericIconCollection.set("BookOpen", BookOpen);
GenericIconCollection.set("Briefcase", Briefcase);
GenericIconCollection.set("Bug", Bug);
GenericIconCollection.set("Cake", Cake);
GenericIconCollection.set("Calculator", Calculator);
GenericIconCollection.set("Calendar", Calendar);

export { GenericIconCollection };
