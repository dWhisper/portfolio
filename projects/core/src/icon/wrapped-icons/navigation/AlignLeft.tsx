import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const AlignLeft = ({
  size,
  pointerEvents,
  color,
  ...rest
}: StyledSvgProps) => {
  const events = pointerEvents ? "auto" : "none";
  return (
    <StyledSvg
      pointerEvents={events}
      height={size}
      width={size}
      fill={"none"}
      {...rest}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth="2"
      strokeMiterlimit="5.75877"
      strokeLinecap="round"
    >
      <rect
        x="6"
        y="6"
        width="16"
        height="4"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="6"
        y="14"
        width="10"
        height="4"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
