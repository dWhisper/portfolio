import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const DotGrid = ({
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
      <circle
        cx="4"
        cy="4"
        r="1"
        transform="rotate(90 4 4)"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="4"
        r="1"
        transform="rotate(90 12 4)"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="20"
        cy="4"
        r="1"
        transform="rotate(90 20 4)"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="4"
        cy="12"
        r="1"
        transform="rotate(90 4 12)"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="1"
        transform="rotate(90 12 12)"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="20"
        cy="12"
        r="1"
        transform="rotate(90 20 12)"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="4"
        cy="20"
        r="1"
        transform="rotate(90 4 20)"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="20"
        r="1"
        transform="rotate(90 12 20)"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="20"
        cy="20"
        r="1"
        transform="rotate(90 20 20)"
        stroke={color}
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
