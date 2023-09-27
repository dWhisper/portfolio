import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const CrossedSwords = ({
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
        d="M2 19.2L3.8 21M4.7 13.8L5.6 17.4M5.6 17.4L9.2 18.3M5.6 17.4L2.9 20.1M16.4 3.9L7.4 12.9L7.85 15.15L10.1 15.6L19.1 6.6L20 3L16.4 3.9Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 19.2L20.2 21M19.3 13.8L18.4 17.4M18.4 17.4L21.1 20.1M18.4 17.4L16.6 17.85L14.8 18.3M9.3 11L4.9 6.6L4 3L7.6 3.9L12 8.3M12.1 13.8L13.9 15.6L16.15 15.15L16.6 12.9L14.8 11.1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
