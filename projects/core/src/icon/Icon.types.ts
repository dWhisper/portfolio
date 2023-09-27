export interface StyledSvgProps {
  size: number;
  id?: string;
  altText?: string;
  color?: string;
  viewBox?: string;
  pointerEvents: boolean;
  title?: string;
}

export interface IconStyledProps {
  color?: string;
}

export interface IconProps {
  size?: number;
  color: string;
}

export type BrandIconName =
  | "Behance"
  | "Discord"
  | "Dribble"
  | "Dropbox"
  | "Facebook"
  | "Figma"
  | "Instagram"
  | "Twitter"
  | "TikTok"
  | "Twitch"
  | "Unsplash"
  | "Vimeo"
  | "WhatsApp"
  | "Yelp"
  | "YouTube";

export type DirectionIconName =
  | "Ascending"
  | "AlignBottom"
  | "AlignHorizontalCenter"
  | "AlignLeft"
  | "AlignRight"
  | "AlignToBottom"
  | "AlignToMiddle"
  | "AlignTop"
  | "AlignToTop"
  | "AlignVerticalCenter"
  | "CaretCircleDown"
  | "CaretCircleDownFilled"
  | "CaretCircleLeft"
  | "CaretCircleLeftFilled"
  | "CaretCircleRight"
  | "CaretCircleRightFilled"
  | "CaretCircleUp"
  | "CaretCircleUpFilled"
  | "ChevronCircleDown"
  | "ChevronCircleDownFilled"
  | "ChevronCircleLeft"
  | "ChevronCircleLeftFilled"
  | "ChevronCircleRight"
  | "ChevronCircleRightFilled"
  | "ChevronCircleUp"
  | "ChevronCircleUpFilled"
  | "ChevronDown"
  | "ChevronDownSmall"
  | "ChevronHorizontal"
  | "ChevronLeft"
  | "ChevronLeftSmall"
  | "ChevronRight"
  | "ChevronRightSmall"
  | "ChevronUp"
  | "ChevronUpSmall"
  | "ChevronVertical"
  | "Descending";

export type EcomIconName =
  | "Bank"
  | "Basket"
  | "Bitcoin"
  | "Cart"
  | "Coin"
  | "CreditCard"
  | "CreditCardAlt";

export type MessagingIconName =
  | "ChatAdd"
  | "ChatApprove"
  | "ChatBubble"
  | "ChatDots"
  | "ChatError"
  | "ChatQuestion"
  | "ChatReject"
  | "ChatRemove";

export type GenericIconName =
  | "Air"
  | "Alarm"
  | "AlertCircle"
  | "AlertCircleFilled"
  | "Arrow"
  | "Attach"
  | "Backspace"
  | "BackspaceFilled"
  | "Bell"
  | "Block"
  | "Book"
  | "BookOpen"
  | "Briefcase"
  | "Bug"
  | "Cake"
  | "Calculator"
  | "Calendar"
  | "Camera"
  | "Check"
  | "CheckDouble"
  | "CheckBox"
  | "CheckBoxFilled"
  | "CheckCircle"
  | "CheckCircleFilled"
  | "Chess"
  | "Clipboard"
  | "Clock"
  | "Cloud"
  | "Coffee"
  | "CrossedSwords"
  | "Crown"
  | "Dice1"
  | "Dice2"
  | "Dice3"
  | "Dice4"
  | "Dice5"
  | "Dice6"
  | "Door"
  | "Draft"
  | "Edit"
  | "Envelope"
  | "ErrorCircle"
  | "ErrorCircleFilled"
  | "EyeClosed"
  | "EyeOpen"
  | "EyeSlashed"
  | "FaceHappy"
  | "FaceNeutral"
  | "FaceSad"
  | "FaceVeryHappy"
  | "FaceVerySad"
  | "FaceWink"
  | "Scissors"
  | "Tooth";

export type MediaIconName =
  | "Play"
  | "AirplayAudio"
  | "AirplayVideo"
  | "Airpods";

export type NavigationIconName =
  | "ArrowBack"
  | "ArrowBackThickFilled"
  | "ArrowBackThick"
  | "ArrowClockwise"
  | "ArrowCounterClockwise"
  | "ArrowCycle"
  | "ArrowDown"
  | "ArrowDownLeft"
  | "ArrowDownRight"
  | "ArrowDownThick"
  | "ArrowEnlarge"
  | "ArrowForward"
  | "ArrowForwardThickFilled"
  | "ArrowForwardThick"
  | "ArrowLeft"
  | "ArrowLeftThick"
  | "ArrowRepeat"
  | "ArrowRight"
  | "ArrowRightLeft"
  | "ArrowRightThick"
  | "ArrowShuffle"
  | "ArrowUp"
  | "ArrowUpDown"
  | "ArrowUpLeft"
  | "ArrowUpRight"
  | "ArrowUpThick"
  | "DotGrid"
  | "DragHorizontal"
  | "DragVertical";

export type ShapeIconName =
  | "Box"
  | "Circle"
  | "CircleFilled"
  | "Cross"
  | "Diamond"
  | "EqualCircle"
  | "EqualCircleFilled"
  | "MinusCircle"
  | "MinusCircleFilled"
  | "PlusCircle"
  | "PlusCircleFilled";

export type TechnologyIconName =
  | "Android"
  | "Angular"
  | "AugmentedReality"
  | "BatteryCharging"
  | "BatteryEmpty"
  | "BatteryFull"
  | "BatteryLow"
  | "BatteryMedium"
  | "Bluetooth"
  | "Bootstrap"
  | "Codepen"
  | "Command"
  | "Computing"
  | "Copy"
  | "CSS"
  | "Dashboard"
  | "Data"
  | "Devices"
  | "Django"
  | "Download"
  | "DownloadAlt"
  | "Github"
  | "Monitor"
  | "PHP"
  | "RSS"
  | "TypeScript"
  | "Upload"
  | "Vercel"
  | "Vue"
  | "Yarn";

export type TransportationIconName = "Bicycle" | "Boat" | "MapPin";

export interface TransportationIconProps extends IconProps {
  name: TransportationIconName;
}

export interface DirectionIconProps extends IconProps {
  name: DirectionIconName;
}

export interface EcomIconProps extends IconProps {
  name: EcomIconName;
}

export interface GenericIconProps extends IconProps {
  name: GenericIconName;
}

export interface NavigationIconProps extends IconProps {
  name: NavigationIconName;
}

export interface BrandIconProps extends IconProps {
  name: BrandIconName;
}

export interface MediaIconProps extends IconProps {
  name: MediaIconName;
}

export interface TechnologyIconProps extends IconProps {
  name: TechnologyIconName;
}

export interface ShapeIconProps extends IconProps {
  name: ShapeIconName;
}

export interface MessagingIconProps extends IconProps {
  name: MessagingIconName;
}
