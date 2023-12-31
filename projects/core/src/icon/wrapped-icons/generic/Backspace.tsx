import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Backspace = ({
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
      width={size}
      {...rest}
    >
      <path
        d="M17 15L11 9.00001M17 9L11 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.4 4.8C7.77771 4.29639 8.37049 4 9 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H9C8.37049 20 7.77771 19.7036 7.4 19.2L2.9 13.2C2.36667 12.4889 2.36667 11.5111 2.9 10.8L7.4 4.8Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
