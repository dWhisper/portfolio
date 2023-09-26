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
import { BootstrapFill } from "../wrapped-icons/technology/BootstrapFill";
import { AugmentedReality } from "../wrapped-icons/technology/AugmentedReality";
import { BatteryCharging } from "../wrapped-icons/technology/BatteryCharging";
import { BatteryEmpty } from "../wrapped-icons/technology/BatteryEmpty";
import { Bluetooth } from "../wrapped-icons/technology/Bluetooth";
import { BatteryFull } from "../wrapped-icons/technology/BatteryFull";
import { BatteryLow } from "../wrapped-icons/technology/BatteryLow";
import { BatteryMedium } from "../wrapped-icons/technology/BatteryMedium";

const TechnologyIconCollection = new Map();

// Error State Box
TechnologyIconCollection.set("Empty", Box);

TechnologyIconCollection.set("Android", AndroidFill);
TechnologyIconCollection.set("Angular", AngularFill);
TechnologyIconCollection.set("AugmentedReality", AugmentedReality);
TechnologyIconCollection.set("BatteryCharging", BatteryCharging);
TechnologyIconCollection.set("BatteryEmpty", BatteryEmpty);
TechnologyIconCollection.set("BatteryFull", BatteryFull);
TechnologyIconCollection.set("BatteryLow", BatteryLow);
TechnologyIconCollection.set("BatteryMedium", BatteryMedium);
TechnologyIconCollection.set("Bluetooth", Bluetooth);
TechnologyIconCollection.set("Bootstrap", BootstrapFill);
TechnologyIconCollection.set("Django", DjangoFill);
TechnologyIconCollection.set("Github", GithubFill);
TechnologyIconCollection.set("PHP", PHPFill);
TechnologyIconCollection.set("RSS", RssFill);
TechnologyIconCollection.set("TypeScript", TypeScriptFill);
TechnologyIconCollection.set("Vercel", VercelFill);
TechnologyIconCollection.set("Vue", VueFill);
TechnologyIconCollection.set("Yarn", YarnFill);

export { TechnologyIconCollection };
