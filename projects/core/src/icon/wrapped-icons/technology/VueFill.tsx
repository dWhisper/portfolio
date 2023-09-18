import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const VueFill = ({
  size,
  pointerEvents,
  color = "black",
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
      fill={color}
      {...rest}
    >
      <path d="M19.1143 2H15L12 6.9L9.42857 2H0L12 23L24 2H19.1143ZM3 3.75H5.91429L12 14.6L18.0857 3.75H21L12 19.5L3 3.75Z" />
    </StyledSvg>
  );
};
