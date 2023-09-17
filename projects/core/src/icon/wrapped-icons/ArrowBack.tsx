import React from "react";
import { StyledSvg } from "../Icon.styled";
import { StyledSvgProps } from "../Icon.types";

export const ArrowBack = ({ size, pointerEvents, ...rest }: StyledSvgProps) => {
  const events = pointerEvents ? "auto" : "none";
  return (
    <StyledSvg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      pointerEvents={events}
      height={size}
      width={size}
      {...rest}
    >
      <path
        d="M8 5L3 10L8 15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10H11C16.5228 10 21 14.4772 21 20V21"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
