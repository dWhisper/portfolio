import { TransportationIconCollection } from "./TransportationIconCollection";
import { TransportationIconProps } from "../Icon.types";

export const TransportationIcon = ({
  name,
  ...rest
}: TransportationIconProps) => {
  let icon = TransportationIconCollection.get(name);
  if (icon === undefined) {
    console.error(`Unknown Icon Name::${name}`);
    icon = TransportationIconCollection.get("Empty");
  }
  return icon({ name, ...rest });
};
