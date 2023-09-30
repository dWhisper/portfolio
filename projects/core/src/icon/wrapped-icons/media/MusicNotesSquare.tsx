import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const MusicNotesSquare = ({
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
        d="M2 6C2 3.79086 3.79155 2 6.00069 2C10.2896 2 13.7104 2 17.9993 2C20.2085 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16.5V8.78078C9 8.32191 9.3123 7.92193 9.75746 7.81063L15.7575 6.31063C16.3886 6.15285 17 6.63021 17 7.28078V15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 11L17 9" stroke={color} strokeWidth="2" />
      <circle cx="7.5" cy="16.5" r="1.5" stroke={color} strokeWidth="2" />
      <circle cx="15.5" cy="15.5" r="1.5" stroke={color} strokeWidth="2" />
    </StyledSvg>
  );
};
