import { TikTokFill } from "../wrapped-icons/brand/TikTokFill";
import { TwitchFill } from "../wrapped-icons/brand/TwitchFill";
import { UnsplashFill } from "../wrapped-icons/brand/UnsplashFill";
import { VimeoFill } from "../wrapped-icons/brand/VimeoFill";
import { YelpFill } from "../wrapped-icons/brand/YelpFill";
import { YouTubeFill } from "../wrapped-icons/brand/YouTubeFill";
import { WhatsAppFill } from "../wrapped-icons/brand/WhatsAppFill";
import { Box } from "../wrapped-icons/shapes/Box";
import { Facebook } from "../wrapped-icons/brand/Facebook";
import { Twitter } from "../wrapped-icons/brand/Twitter";
import { Instagram } from "../wrapped-icons/brand/Instagram";
import { Behance } from "../wrapped-icons/brand/Behance";

const BrandIconCollection = new Map();

BrandIconCollection.set("Empty", Box);

BrandIconCollection.set("Behance", Behance);
BrandIconCollection.set("Facebook", Facebook);
BrandIconCollection.set("Twitter", Twitter);
BrandIconCollection.set("Instagram", Instagram);
BrandIconCollection.set("TikTok", TikTokFill);
BrandIconCollection.set("Twitch", TwitchFill);
BrandIconCollection.set("Unsplash", UnsplashFill);
BrandIconCollection.set("Vimeo", VimeoFill);
BrandIconCollection.set("WhatsApp", WhatsAppFill);
BrandIconCollection.set("Yelp", YelpFill);
BrandIconCollection.set("YouTube", YouTubeFill);

export { BrandIconCollection };
