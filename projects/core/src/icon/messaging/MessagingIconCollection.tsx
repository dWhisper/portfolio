import { Box } from "../wrapped-icons/shapes/Box";
import { ChatAdd } from "../wrapped-icons/messaging/ChatAdd";
import { ChatApprove } from "../wrapped-icons/messaging/ChatApprove";
import { ChatBubble } from "../wrapped-icons/messaging/ChatBubble";
import { ChatDots } from "../wrapped-icons/messaging/ChatDots";
import { ChatEdit } from "../wrapped-icons/messaging/ChatEdit";
import { ChatError } from "../wrapped-icons/messaging/ChatError";
import { ChatQuestion } from "../wrapped-icons/messaging/ChatQuestion";
import { ChatReject } from "../wrapped-icons/messaging/ChatReject";
import { ChatRemove } from "../wrapped-icons/messaging/ChatRemove";

const MessagingIconCollection = new Map();

MessagingIconCollection.set("Empty", Box);

MessagingIconCollection.set("ChatAdd", ChatAdd);
MessagingIconCollection.set("ChatApprove", ChatApprove);
MessagingIconCollection.set("ChatBubble", ChatBubble);
MessagingIconCollection.set("ChatDots", ChatDots);
MessagingIconCollection.set("ChatEdit", ChatEdit);
MessagingIconCollection.set("ChatError", ChatError);
MessagingIconCollection.set("ChatQuestion", ChatQuestion);
MessagingIconCollection.set("ChatReject", ChatReject);
MessagingIconCollection.set("ChatRemove", ChatRemove);

export { MessagingIconCollection };
