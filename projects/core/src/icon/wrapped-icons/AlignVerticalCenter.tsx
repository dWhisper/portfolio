import React from "react";
import { StyledSvg } from "../Icon.styled";
import { StyledSvgProps } from "../Icon.types";

export const AlignVerticalCenter = ({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12L3 12"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
      />
      <path
        d="M6 16L6 20H10L10 16"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16L14 18H18L18 16"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8L14 6L18 6V8"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8V4L6 4L6 8"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
