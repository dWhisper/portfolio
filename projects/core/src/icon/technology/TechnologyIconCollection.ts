import { AndroidFill } from "../wrapped-icons/technology/AndroidFill";
import { AngularFill } from "../wrapped-icons/technology/AngularFill";
import { GithubFill } from "../wrapped-icons/technology/GithubFill";
import { PHPFill } from "../wrapped-icons/technology/PHPFill";
import { RssFill } from "../wrapped-icons/technology/RssFill";
import { TypeScriptFill } from "../wrapped-icons/technology/TypeScriptFill";
import { VercelFill } from "../wrapped-icons/technology/VercelFill";
import { YarnFill } from "../wrapped-icons/technology/YarnFill";
import { VueFill } from "../wrapped-icons/technology/VueFill";
import { Box } from "../wrapped-icons/shapes/Box";
import { DjangoFill } from "../wrapped-icons/technology/DjangoFill";

const TechnologyIconCollection = new Map();

// Error State Box
TechnologyIconCollection.set("Empty", Box);

TechnologyIconCollection.set("Android", AndroidFill);
TechnologyIconCollection.set("Angular", AngularFill);
TechnologyIconCollection.set("Github", GithubFill);
TechnologyIconCollection.set("PHP", PHPFill);
TechnologyIconCollection.set("RSS", RssFill);
TechnologyIconCollection.set("TypeScript", TypeScriptFill);
TechnologyIconCollection.set("Vercel", VercelFill);
TechnologyIconCollection.set("Vue", VueFill);
TechnologyIconCollection.set("Yarn", YarnFill);
TechnologyIconCollection.set("Django", DjangoFill);

export { TechnologyIconCollection };
