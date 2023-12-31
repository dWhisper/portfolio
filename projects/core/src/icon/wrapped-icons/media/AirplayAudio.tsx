import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const AirplayAudio = ({
  size,
  pointerEvents,
  color,
  ...rest
}: StyledSvgProps) => {
  const events = pointerEvents ? "auto" : "none";
  return (
    <StyledSvg
      pointerEvents={events}
      height={size}
      width={size}
      fill={"none"}
      {...rest}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16L18 21H6L12 16Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.99927 18C2.74389 16.3287 2 14.2512 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1228 15.1252C17.6793 14.215 18 13.1449 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 13.144 6.32014 14.2131 6.87572 15.1228"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
