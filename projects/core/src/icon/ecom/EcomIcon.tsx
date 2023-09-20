import { EcomIconCollection } from "./EcomIconCollection";
import { EcomIconProps } from "../Icon.types";

export const EcomIcon = ({ name, ...rest }: EcomIconProps) => {
  let icon = EcomIconCollection.get(name);
  if (icon === undefined) {
    console.error(`Unknown Icon Name::${name}`);
    icon = EcomIconCollection.get("Empty");
  }
  return icon({ name, ...rest });
};
