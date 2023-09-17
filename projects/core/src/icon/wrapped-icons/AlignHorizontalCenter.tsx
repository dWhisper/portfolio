import React from "react";
import { StyledSvg } from "../Icon.styled";
import { StyledSvgProps } from "../Icon.types";

export const AlignHorizontalCenter = ({
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
        d="M12 3L12 21"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
      />
      <path
        d="M16 6H20V10H16"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10H4V6H8"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 14H18V18H16"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14H6V18H8"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="5.75877"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
