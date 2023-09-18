import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ArrowDownThick = ({
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
      fill={"none"}
      pointerEvents={events}
      height={size}
      width={size}
      {...rest}
    >
      <path
        d="M12 21L21 14L16.0104 14L16 3L8 3L8 14L3 14L12 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
