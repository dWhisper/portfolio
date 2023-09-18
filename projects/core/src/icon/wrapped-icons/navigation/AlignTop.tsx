import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const AlignTop = ({
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
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 2L3 2"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
      />
      <path
        d="M6 22L6 6L10 6L10 22H6Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16L14 6L18 6L18 16H14Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
