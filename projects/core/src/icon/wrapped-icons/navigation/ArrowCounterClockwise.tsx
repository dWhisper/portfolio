import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ArrowCounterClockwise = ({
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
      height={size}
      width={size}
      fill={"none"}
      {...rest}
    >
      <path
        d="M4.26592 16.0598C5.11918 17.778 6.49133 19.1725 8.18081 20.0384C9.87029 20.9043 11.788 21.1959 13.6524 20.8705C15.5168 20.545 17.2294 19.6196 18.5389 18.2302C19.8483 16.8407 20.6854 15.0606 20.9274 13.1511C21.1693 11.2416 20.8032 9.30348 19.883 7.6214C18.9627 5.93933 17.5367 4.60195 15.8145 3.80573C14.0922 3.0095 12.1645 2.79638 10.3145 3.19769C8.46448 3.59899 6.9483 4.51138 5.69467 5.95312C5.54287 6.11323 4.95934 6.75937 4.47424 7.73437"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.93127 7.81298L3.89101 8.71974L3.00004 3.58952"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
