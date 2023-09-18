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

export type ShapeIconName = "Circle" | "Square" | "Triangle" | "Hexagon";

export type TechnologyIconName =
  | "RSS"
  | "Wifi"
  | "Bluetooth"
  | "Battery"
  | "SCSS"
  | "HTML"
  | "Android"
  | "Angular"
  | "Github"
  | "PHP"
  | "Rss"
  | "TypeScript"
  | "Vercel"
  | "Vue"
  | "Yarn";

export type MediaIconName =
  | "Play"
  | "AirplayAudio"
  | "AirplayVideo"
  | "Airpods";

export type BrandIconName =
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

export type NavigationIconName =
  | "AlignBottom"
  | "AlignHorizontalCenter"
  | "AlignLeft"
  | "AlignRight"
  | "AlignToBottom"
  | "AlignToMiddle"
  | "AlignTop"
  | "AlignToTop"
  | "AlignVerticalCenter"
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

export type GenericIconName = "Air" | "Alarm";
