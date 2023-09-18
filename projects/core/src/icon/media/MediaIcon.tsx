import { MediaIconCollection } from "./MediaIconCollection";
import { MediaIconProps } from "../Icon.types";

export const MediaIcon = ({ name, ...rest }: MediaIconProps) => {
  let icon = MediaIconCollection.get(name);
  if (icon === undefined) {
    console.error(`Unknown Icon Name::${name}`);
    icon = MediaIconCollection.get("Empty");
  }
  return icon({ name, ...rest });
};
