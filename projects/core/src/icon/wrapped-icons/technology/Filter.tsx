import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Filter = ({
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
        cx="12"
        cy="5"
        rx="9"
        ry="2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 5C3 7.23094 6.87106 11.6739 8.85579 13.8052C9.57875 14.5816 10 15.596 10 16.6569V19C10 20.1046 10.8954 21 12 21V21C13.1046 21 14 20.1046 14 19V16.6569C14 15.596 14.4212 14.5816 15.1442 13.8052C17.1289 11.6739 21 7.23094 21 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
