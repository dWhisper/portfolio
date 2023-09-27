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
import { Discord } from "../wrapped-icons/brand/Discord";
import { Dribble } from "../wrapped-icons/brand/Dribble";
import { Dropbox } from "../wrapped-icons/brand/Dropbox";
import { Figma } from "../wrapped-icons/brand/Figma";

const BrandIconCollection = new Map();

BrandIconCollection.set("Empty", Box);

BrandIconCollection.set("Behance", Behance);
BrandIconCollection.set("Discord", Discord);
BrandIconCollection.set("Dribble", Dribble);
BrandIconCollection.set("Dropbox", Dropbox);
BrandIconCollection.set("Facebook", Facebook);
BrandIconCollection.set("Figma", Figma);
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
