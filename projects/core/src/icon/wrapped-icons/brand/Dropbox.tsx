import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Dropbox = ({
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
        d="M6 2L12 5.75L6 9.5L0 5.75L6 2ZM18 2L24 5.75L18 9.5L12 5.75L18 2ZM0 13.25L6 9.5L12 13.25L6 17L0 13.25ZM18 9.5L24 13.25L18 17L12 13.25L18 9.5ZM6 18.25L12 14.5L18 18.25L12 22L6 18.25Z"
        fill={color}
      />
    </StyledSvg>
  );
};
