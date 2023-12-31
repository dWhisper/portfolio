import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const SaveIcon = ({
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
        d="M7 21H17C19.2091 21 21 19.2091 21 17V7.41421C21 7.149 20.8946 6.89464 20.7071 6.70711L17.2929 3.29289C17.1054 3.10536 16.851 3 16.5858 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 3H15V6C15 6.55228 14.5523 7 14 7H10C9.44772 7 9 6.55228 9 6V3Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M17 21V14C17 13.4477 16.5523 13 16 13H8C7.44772 13 7 13.4477 7 14V21"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M11 17H13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};
