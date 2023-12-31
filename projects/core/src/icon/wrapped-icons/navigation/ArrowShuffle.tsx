import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ArrowShuffle = ({
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
      fill={"none"}
      height={size}
      width={size}
      {...rest}
    >
      <path
        d="M2 19H5.9081C6.58863 19 7.22245 18.654 7.59045 18.0815L11.5 12L15.4095 5.91849C15.7775 5.34604 16.4114 5 17.0919 5H22M22 19H17.0919C16.4114 19 15.7775 18.654 15.4095 18.0815L13.4286 15M2 5H5.9081C6.58863 5 7.22245 5.34604 7.59045 5.91848L9.57143 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 2L22 5L19 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 16L22 19L19 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
