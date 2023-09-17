import { NavigationIconCollection } from "./NavigationIconCollection";
import { NavigationIconProps } from "../Icon.types";

export const BrandIcon = ({ name, ...rest }: NavigationIconProps) => {
  const icon = NavigationIconCollection.get(name);
  return icon({ name, ...rest });
};
