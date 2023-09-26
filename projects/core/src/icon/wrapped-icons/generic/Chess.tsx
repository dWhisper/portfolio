import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Chess = ({
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
      width={size}
      fill={"none"}
      {...rest}
    >
      <path
        d="M13.5331 3.81023L8 2L9 6L3.62959 10.4753C3.23066 10.8078 3 11.3002 3 11.8195V11.8195C3 12.4375 3.53701 12.9075 4.12693 12.8059L9 12L6.90347 19H17.5173L18.8004 13.2553C19.7135 9.16689 17.4144 5.04419 13.5331 3.81023Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 21C4 19.8954 4.89543 19 6 19H12H18C19.1046 19 20 19.8954 20 21V22H4V21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
