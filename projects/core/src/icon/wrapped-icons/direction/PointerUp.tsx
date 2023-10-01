import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PointerUp = ({
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
        d="M18.9999 16L19.8692 4.26538C19.9448 3.24523 19.275 2.31876 18.2826 2.07066C17.0656 1.76642 15.8548 2.58884 15.689 3.83225L15 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15V12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12V16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13V11.5C12 10.3954 11.1046 9.5 10 9.5C8.89543 9.5 8 10.3954 8 11.5V15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13V11C16 9.89543 15.1046 9 14 9C12.8954 9 12 9.89543 12 11V13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 16C18.4643 20 15.6421 22 11.5 22C7.35786 22 4 20 4 16"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M13.6923 17H11C9.89543 17 9 16.1046 9 15C9 13.8954 9.89543 13 11 13L15 13C17.2091 13 19.5 15 18.5 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
