import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ParallelogramFilled = ({
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
        d="M5.58555 6.45056C5.83087 5.59196 6.61564 5 7.5086 5H19.3485C20.6773 5 21.6366 6.27181 21.2716 7.54944L18.4144 17.5494C18.1691 18.408 17.3844 19 16.4914 19H4.65146C3.3227 19 2.36337 17.7282 2.72841 16.4506L5.58555 6.45056Z"
        fill={color}
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
