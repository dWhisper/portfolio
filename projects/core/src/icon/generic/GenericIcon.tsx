import { GenericIconCollection } from "./GenericIconCollection";
import { GenericIconProps } from "../Icon.types";

export const GenericIcon = ({ name, ...rest }: GenericIconProps) => {
  const icon = GenericIconCollection.get(name);
  return icon({ name, ...rest });
};
