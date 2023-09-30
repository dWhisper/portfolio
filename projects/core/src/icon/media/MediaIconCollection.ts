import { Box } from "../wrapped-icons/shapes/Box";
import { AirplayVideo } from "../wrapped-icons/media/AirplayVideo";
import { AirplayAudio } from "../wrapped-icons/media/AirplayAudio";
import { Airpods } from "../wrapped-icons/media/Airpods";
import { Headphone } from "../wrapped-icons/media/Headphone";
import { Microphone } from "../wrapped-icons/media/Microphone";
import { MiniPlayer } from "../wrapped-icons/media/MiniPlayer";
import { MusicDisc } from "../wrapped-icons/media/MusicDisc";
import { MusicNote } from "../wrapped-icons/media/MusicNote";
import { MusicNotesSquare } from "../wrapped-icons/media/MusicNotesSquare";
import { MusicNotes } from "../wrapped-icons/media/MusicNotes";

const MediaIconCollection = new Map();

// Error State
MediaIconCollection.set("Empty", Box);

MediaIconCollection.set("AirplayVideo", AirplayVideo);
MediaIconCollection.set("AirplayAudio", AirplayAudio);
MediaIconCollection.set("Airpods", Airpods);
MediaIconCollection.set("Headphones", Headphone);
MediaIconCollection.set("Microphone", Microphone);
MediaIconCollection.set("MiniPlayer", MiniPlayer);
MediaIconCollection.set("MusicDisc", MusicDisc);
MediaIconCollection.set("MusicNote", MusicNote);
MediaIconCollection.set("MusicNotes", MusicNotes);
MediaIconCollection.set("MusicNotesSquare", MusicNotesSquare);

export { MediaIconCollection };
