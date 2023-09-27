import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Dice2 = ({
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
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 7.75V8.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15.75 15.75V16.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M8 8H8.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M15.5 16H16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};
