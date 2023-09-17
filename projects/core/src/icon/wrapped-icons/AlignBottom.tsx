import React from "react";
import { StyledSvg } from "../Icon.styled";
import { StyledSvgProps } from "../Icon.types";

export const AlignBottom = ({
  size,
  pointerEvents,
  ...rest
}: StyledSvgProps) => {
  const events = pointerEvents ? "auto" : "none";
  return (
    <StyledSvg
      pointerEvents={events}
      height={size}
      width={size}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 22L3 22"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
      />
      <path
        d="M6 18L6 2L10 2L10 18H6Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18L14 8L18 8L18 18H14Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
