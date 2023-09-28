import { Box } from "../wrapped-icons/shapes/Box";
import { AirplayVideo } from "../wrapped-icons/media/AirplayVideo";
import { AirplayAudio } from "../wrapped-icons/media/AirplayAudio";
import { Airpods } from "../wrapped-icons/media/Airpods";
import { Headphone } from "../wrapped-icons/media/Headphone";

const MediaIconCollection = new Map();

// Error State
MediaIconCollection.set("Empty", Box);

MediaIconCollection.set("AirplayVideo", AirplayVideo);
MediaIconCollection.set("AirplayAudio", AirplayAudio);
MediaIconCollection.set("Airpods", Airpods);
MediaIconCollection.set("Headphones", Headphone);

export { MediaIconCollection };
