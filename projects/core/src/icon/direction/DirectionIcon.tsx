import { DirectionIconCollection } from "./DirectionIconCollection";
import { DirectionIconProps } from "../Icon.types";

export const DirectionIcon = ({ name, ...rest }: DirectionIconProps) => {
  let icon = DirectionIconCollection.get(name);
  if (icon === undefined) {
    console.error(`Unknown Icon Name::${name}`);
    icon = DirectionIconCollection.get("Empty");
  }
  return icon({ name, ...rest });
};
