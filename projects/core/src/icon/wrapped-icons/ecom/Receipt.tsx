import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Receipt = ({
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
        d="M19 21H7C4.79086 21 3 19.2091 3 17V5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V18C17 19.6569 17.3431 21 19 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 10C21 8.89543 20.1046 8 19 8H17V18.5C17 19.8807 17.6193 21 19 21C20.3807 21 21 19.8807 21 18.5V10Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 11H7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M13 7H7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M10 15H7" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </StyledSvg>
  );
};
