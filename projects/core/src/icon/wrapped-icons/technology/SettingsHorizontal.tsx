import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const SettingsHorizontal = ({
  size,
  color,
  pointerEvents,
  ...rest
}: StyledSvgProps) => {
  const events = pointerEvents ? "auto" : "none";
  return (
    <StyledSvg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      pointerEvents={events}
      height={size}
      fill={"none"}
      width={size}
      {...rest}
    >
      <path
        d="M3 5H7M21 5H11M3 12H15M21 12H19M3 19H5M21 19H9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="9"
        cy="5"
        r="2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="17"
        cy="12"
        r="2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="7"
        cy="19"
        r="2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};
