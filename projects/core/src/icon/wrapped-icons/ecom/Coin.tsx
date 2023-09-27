import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Coin = ({
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
      <ellipse
        cx="9.5"
        cy="10"
        rx="9.5"
        ry="10"
        transform="matrix(-1 0 0 1 20 2)"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 8.8C12.3732 8.29767 11.5941 8 10.7498 8C8.67883 8 7 9.79086 7 12C7 14.2091 8.67883 16 10.7498 16C11.5941 16 12.3732 15.7023 13 15.2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2C14.3333 2 23 3 23 12C23 21 14.3333 22 10 22"
        stroke={color}
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
