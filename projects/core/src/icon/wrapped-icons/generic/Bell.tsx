import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Bell = ({
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
      fill="none"
      height={size}
      width={size}
      {...rest}
    >
      <path
        d="M12.7214 5.00346L11.2549 5.00002C7.91139 4.99217 5.00832 7.70878 4.98528 11.0009V14.7894C4.98528 15.5791 4.88469 16.351 4.45381 17.0081L4.16685 17.4456C3.73107 18.1101 4.19966 19.0002 4.98528 19.0002H19.0147C19.8003 19.0002 20.2689 18.1101 19.8331 17.4456L19.5462 17.0081C19.1153 16.351 19.0147 15.5791 19.0147 14.7894V11.0009C18.9758 7.70863 16.0649 5.0113 12.7214 5.00346Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2C13.1046 2 14 2.89543 14 4V5H10V4C10 2.89543 10.8954 2 12 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
