import { BrandIconCollection } from "./BrandIconCollection";
import { BrandIconProps } from "../Icon.types";

export const BrandIcon = ({ name, ...rest }: BrandIconProps) => {
  const icon = BrandIconCollection.get(name);
  return icon({ name, ...rest });
};
