import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const KeyIcon = ({
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
        d="M8 18L10 16H12L13.3598 14.6394C14.03 14.873 14.7502 15 15.5 15C19.0899 15 22 12.0899 22 8.5C22 4.91015 19.0899 2 15.5 2C11.9101 2 9 4.91015 9 8.5C9 9.25243 9.12785 9.975 9.36301 10.6472L2 18V22H6L8 20V18Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="17"
        cy="7"
        r="1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
