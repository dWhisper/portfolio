import { GenericIconCollection } from "./GenericIconCollection";
import { GenericIconProps } from "../Icon.types";

export const GenericIcon = ({ name, ...rest }: GenericIconProps) => {
  let icon = GenericIconCollection.get(name);
  if (icon === undefined) {
    console.error(`Unknown Icon Name::${name}`);
    icon = GenericIconCollection.get("Empty");
  }
  return icon({ name, ...rest });
};
