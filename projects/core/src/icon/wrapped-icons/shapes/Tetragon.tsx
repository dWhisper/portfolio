import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Tetragon = ({
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
        d="M3.57482 13.3877C2.80839 12.6213 2.80839 11.3787 3.57482 10.6123L10.6123 3.57482C11.3787 2.80839 12.6213 2.80839 13.3877 3.57482L20.4252 10.6123C21.1916 11.3787 21.1916 12.6213 20.4252 13.3877L13.3877 20.4252C12.6213 21.1916 11.3787 21.1916 10.6123 20.4252L3.57482 13.3877Z"
        stroke={color}
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
