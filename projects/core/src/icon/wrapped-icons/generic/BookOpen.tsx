import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const BookOpen = ({
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
      fill="none"
      pointerEvents={events}
      height={size}
      width={size}
      {...rest}
    >
      <path
        d="M2 6C2 6 3.5 4 7 4C10.5 4 12 6 12 6V20C12 20 10.5 19 7 19C3.5 19 2 20 2 20V6Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6C12 6 13.5 4 17 4C20.5 4 22 6 22 6V20C22 20 20.5 19 17 19C13.5 19 12 20 12 20V6Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
