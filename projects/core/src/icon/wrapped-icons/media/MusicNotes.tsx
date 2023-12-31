import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const MusicNotes = ({
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
        d="M8 18V5.71584C8 4.7287 8.72022 3.8892 9.69589 3.73909L18.6959 2.35448C19.9074 2.16809 21 3.10545 21 4.33122V16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 9L21 7" stroke={color} strokeWidth="2" />
      <path
        d="M8 18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 16 5 16C6.65685 16 8 16.3431 8 18Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 16C21 17.6569 19.6569 19 18 19C16.3431 19 15 17.6569 15 16C15 14.3432 16.3431 14 18 14C19.6569 14 21 14.3432 21 16Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
