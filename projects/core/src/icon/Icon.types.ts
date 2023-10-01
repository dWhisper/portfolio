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
  | "Gatsby"
  | "Google"
  | "GoogleCircle"
  | "Instagram"
  | "LinkedIn"
  | "LinkedInBox"
  | "Mastodon"
  | "Medium"
  | "Pinterest"
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
  | "Descending"
  | "PanelBottom"
  | "PanelLeft"
  | "PanelRight"
  | "PanelSplit"
  | "PanelSplitColumn"
  | "PanelSplitRow"
  | "PanelTop"
  | "PointerDownFilled"
  | "PointerHand"
  | "PointerLeftFilled"
  | "PointerRightFilled"
  | "PointerUp"
  | "PointerUpFilled";

export type EcomIconName =
  | "Bank"
  | "Basket"
  | "Bitcoin"
  | "Cart"
  | "Coin"
  | "CreditCard"
  | "CreditCardAlt"
  | "Gift"
  | "Money"
  | "PriceCut";

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
  | "EnvelopeOpen"
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
  | "Fire"
  | "Flag"
  | "Flashlight"
  | "Gear"
  | "Glasses"
  | "Hammer"
  | "Hand"
  | "Hashtag"
  | "History"
  | "Home"
  | "HomeAlt"
  | "Inbox"
  | "Infinity"
  | "InfoCircle"
  | "InfoCircleFilled"
  | "Jar"
  | "Key"
  | "Leaf"
  | "LightBulb"
  | "LinkChain"
  | "LinkOff"
  | "LinkOn"
  | "LockOff"
  | "LockOn"
  | "Paper"
  | "PaperAirplane"
  | "Pencil"
  | "PeopleGroup"
  | "PeopleMultiple"
  | "Percentage"
  | "Person"
  | "PersonAdd"
  | "PersonCheck"
  | "PersonRemove"
  | "Pin"
  | "Planet"
  | "Plant"
  | "QuestionCircle"
  | "QuestionCircleFilled"
  | "Scissors"
  | "Tooth";

export type MediaIconName =
  | "AirplayAudio"
  | "AirplayVideo"
  | "Airpods"
  | "Headphones"
  | "Microphone"
  | "MiniPlayer"
  | "MusicDisc"
  | "MusicNote"
  | "MusicNotes"
  | "MusicNotesSquare"
  | "Pause"
  | "Play";

export type MessagingIconName =
  | "AtSign"
  | "ChatAdd"
  | "ChatApprove"
  | "ChatBubble"
  | "ChatDots"
  | "ChatError"
  | "ChatQuestion"
  | "ChatReject"
  | "ChatRemove"
  | "Language"
  | "Newspaper"
  | "Phone";

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
  | "ArrowHeight"
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
  | "DotsHorizontal"
  | "DotsVertical"
  | "DragHorizontal"
  | "DragVertical"
  | "ForkLeft"
  | "ForkRight"
  | "FullScreen"
  | "Grid"
  | "LinkOut"
  | "NormalScreen";

export type ShapeIconName =
  | "Box"
  | "BoxFilled"
  | "Circle"
  | "CircleFilled"
  | "Cross"
  | "Diamond"
  | "EqualCircle"
  | "EqualCircleFilled"
  | "Heart"
  | "HeartFilled"
  | "Heptagon"
  | "HeptagonFilled"
  | "Hexagon"
  | "HexagonFilled"
  | "Minus"
  | "MinusCircle"
  | "MinusCircleFilled"
  | "Moon"
  | "MoonFilled"
  | "Octagon"
  | "OctagonFilled"
  | "Oval"
  | "Parallelogram"
  | "ParallelogramFilled"
  | "Plus"
  | "PlusCircle"
  | "PlusCircleFilled"
  | "Pentagon"
  | "PentagonFilled";

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
  | "File"
  | "Filter"
  | "Folder"
  | "FolderAdd"
  | "GameController"
  | "Github"
  | "GraphQL"
  | "HTML"
  | "Image"
  | "JavaScript"
  | "JQuery"
  | "KeyCap"
  | "Laptop"
  | "MobileDevice"
  | "Monitor"
  | "Network"
  | "NextJS"
  | "NodeJS"
  | "NPM"
  | "Octocat"
  | "PHP"
  | "Postgres"
  | "Python"
  | "RSS"
  | "TypeScript"
  | "Upload"
  | "Vercel"
  | "Vue"
  | "Yarn";

export type TransportationIconName =
  | "Bicycle"
  | "Boat"
  | "Globe"
  | "Health"
  | "Lifesaver"
  | "Location"
  | "Map"
  | "MapPin"
  | "Plane"
  | "PlaneFilled";

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
