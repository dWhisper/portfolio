import { TechnologyIconCollection } from "./TechnologyIconCollection";
import { TechnologyIconProps } from "../Icon.types";

export const TechnologyIcon = ({ name, ...rest }: TechnologyIconProps) => {
  let icon = TechnologyIconCollection.get(name);

  if (icon === undefined) {
    console.error(`Unknown Icon Name::${name}`);
    icon = TechnologyIconCollection.get("Empty");
  }
  return icon({ name, ...rest });
};
