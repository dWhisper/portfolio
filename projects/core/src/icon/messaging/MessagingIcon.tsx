import { MessagingIconCollection } from "./MessagingIconCollection";
import { MessagingIconProps } from "../Icon.types";

export const MessagingIcon = ({ name, ...rest }: MessagingIconProps) => {
  let icon = MessagingIconCollection.get(name);
  if (icon === undefined) {
    console.error(`Unknown Icon Name::${name}`);
    icon = MessagingIconCollection.get("Empty");
  }
  return icon({ name, ...rest });
};
