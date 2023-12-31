import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Camera = ({
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
      fill={"none"}
      height={size}
      width={size}
      {...rest}
    >
      <path
        d="M6.23319 5.83404L6.67845 3.60777C6.86542 2.67292 7.68625 2 8.63961 2H15.3604C16.3138 2 17.1346 2.67292 17.3216 3.60777L17.7668 5.83404C17.9092 6.54605 18.4491 7.11228 19.1535 7.28839C20.8264 7.70661 22 9.20969 22 10.9341V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V10.9341C2 9.20969 3.17357 7.70661 4.84645 7.28839C5.55088 7.11228 6.09079 6.54605 6.23319 5.83404Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="14"
        r="4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 6L13 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
