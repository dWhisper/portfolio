import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Basket = ({
  size,
  pointerEvents,
  color,
  ...rest
}: StyledSvgProps) => {
  const events = pointerEvents ? "auto" : "none";
  return (
    <StyledSvg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      pointerEvents={events}
      fill={"none"}
      height={size}
      width={size}
      {...rest}
    >
      <path
        d="M2.31063 11.2425C2.15285 10.6114 2.63021 10 3.28078 10H20.7192C21.3698 10 21.8472 10.6114 21.6894 11.2425L19.8787 18.4851C19.6561 19.3754 18.8562 20 17.9384 20H6.06155C5.14382 20 4.34385 19.3754 4.12127 18.4851L2.31063 11.2425Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 14V16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M15 14V16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 10L10 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 10L14 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};
