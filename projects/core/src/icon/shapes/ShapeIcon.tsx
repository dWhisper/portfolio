import { ShapeIconCollection } from "./ShapeIconCollection";
import { ShapeIconProps } from "../Icon.types";

export const ShapeIcon = ({ name, ...rest }: ShapeIconProps) => {
  const icon = ShapeIconCollection.get(name);
  return icon({ name, ...rest });
};
