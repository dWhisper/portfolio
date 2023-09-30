import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const LightBulb = ({
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
        d="M10 22H14M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C19 11.3787 17.8135 13.4694 16 14.7344L15.4582 17.3004C15.3097 18.2778 14.4695 19 13.4809 19H10.5191C9.53052 19 8.69027 18.2778 8.54177 17.3004L8 14.7453C6.18652 13.4804 5 11.3787 5 9Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15H16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
