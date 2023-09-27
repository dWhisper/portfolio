import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Arrow = ({
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
        d="M3 3L10 22L12.0513 15.8461C12.6485 14.0544 14.0544 12.6485 15.846 12.0513L22 10L3 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
