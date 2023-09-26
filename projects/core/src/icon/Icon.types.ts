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
  | "Facebook"
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
  | "ChevronVertical";

export type EcomIconName = "Bank" | "Basket" | "Bitcoin" | "Cart";

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
  | "CheckBox"
  | "CheckBoxFilled"
  | "CheckCircle"
  | "CheckCircleFilled"
  | "Chess"
  | "ErrorCircle"
  | "ErrorCircleFilled";

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
  | "ArrowUpThick";

export type ShapeIconName =
  | "Box"
  | "Circle"
  | "CircleFilled"
  | "MinusCircle"
  | "MinusCircleFilled"
  | "PlusCircle"
  | "PlusCircleFilled";

export type TechnologyIconName =
  | "Django"
  | "Bluetooth"
  | "BatteryEmpty"
  | "BatteryCharging"
  | "BatteryFull"
  | "BatteryLow"
  | "BatteryMedium"
  | "AugmentedReality"
  | "SCSS"
  | "HTML"
  | "Android"
  | "Angular"
  | "Bootstrap"
  | "Github"
  | "PHP"
  | "RSS"
  | "TypeScript"
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
