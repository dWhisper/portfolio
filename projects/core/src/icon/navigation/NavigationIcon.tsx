import { NavigationIconCollection } from "./NavigationIconCollection";
import { NavigationIconProps } from "../Icon.types";

export const NavigationIcon = ({ name, ...rest }: NavigationIconProps) => {
  let icon = NavigationIconCollection.get(name);
  if (icon === undefined) {
    console.error(`Unknown Icon Name::${name}`);
    icon = NavigationIconCollection.get("Empty");
  }
  return icon({ name, ...rest });
};
