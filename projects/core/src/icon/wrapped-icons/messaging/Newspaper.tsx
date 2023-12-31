import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Newspaper = ({
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
        d="M5 21H17C19.2091 21 21 19.2091 21 17V5C21 3.89543 20.1046 3 19 3H9C7.89543 3 7 3.89543 7 5V18C7 19.6569 6.65685 21 5 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10C3 8.89543 3.89543 8 5 8H7V18.5C7 19.8807 6.38071 21 5 21C3.61929 21 3 19.8807 3 18.5V10Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="8"
        r="1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 14H17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 17H14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};
