import { BrandIconCollection } from "./BrandIconCollection";
import { BrandIconProps } from "../Icon.types";

export const BrandIcon = ({ name, ...rest }: BrandIconProps) => {
  let icon = BrandIconCollection.get(name);
  if (icon === undefined) {
    console.error(`Unknown Icon Name::${name}`);
    icon = BrandIconCollection.get("Empty");
  }
  return icon({ name, ...rest });
};
