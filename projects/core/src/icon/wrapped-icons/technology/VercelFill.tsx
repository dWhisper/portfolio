import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const VercelFill = ({
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
      fill={color}
      width={size}
      {...rest}
    >
      <path d="M12 1L24 22H0L12 1Z" />
    </StyledSvg>
  );
};
