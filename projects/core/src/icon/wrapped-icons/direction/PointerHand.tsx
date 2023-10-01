import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PointerHand = ({
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
        d="M20 16V9.5C20 8.67158 19.3587 8 18.5195 8C18 8 17 8.3 17 9.5M8.00004 14L8 5.51958"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 16C20 20 16.866 22 13 22C9.13401 22 7.80428 21 4.80428 16L3.23281 13.3949C2.69684 12.5274 3.1259 11.4011 4.11416 11.0812C4.77908 10.866 5.51122 11.0881 5.93175 11.6326L8 14.0325"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11V7.5C14 6.67157 14.6716 6 15.5 6V6V6C16.3284 6 17 6.67157 17 7.5V11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11V6.5C11 5.67157 11.6716 5 12.5 5V5V5C13.3284 5 14 5.67157 14 6.5V11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11V2.5C8 1.67157 8.67157 1 9.5 1V1V1C10.3284 1 11 1.67157 11 2.5V11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
