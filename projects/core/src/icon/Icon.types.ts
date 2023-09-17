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

export type BrandIconName = "AndroidFill" | "AngularFill";

export type GenericIconName =
  | "Air"
  | "AirplayAudio"
  | "AirplayVideo"
  | "Airpods"
  | "Alarm"
  | "AlignBottom"
  | "AlignHorizontalCenter"
  | "AlignLeft"
  | "AlignRight"
  | "AlignTop"
  | "AlignToBottom"
  | "AlignToMiddle"
  | "AlignVerticalCenter";

export type NavigationIconName =
  | "ArrowForward"
  | "ArrowBack"
  | "ArrowBackThick"
  | "ArrowBackThickFill";
