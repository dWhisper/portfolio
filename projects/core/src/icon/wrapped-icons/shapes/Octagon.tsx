import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Octagon = ({
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
        d="M11.2346 2.31703C11.7247 2.11404 12.2753 2.11404 12.7654 2.31703L18.3057 4.61191C18.7958 4.81489 19.1851 5.20424 19.3881 5.6943L21.683 11.2346C21.886 11.7247 21.886 12.2753 21.683 12.7654L19.3881 18.3057C19.1851 18.7958 18.7958 19.1851 18.3057 19.3881L12.7654 21.683C12.2753 21.886 11.7247 21.886 11.2346 21.683L5.6943 19.3881C5.20424 19.1851 4.81489 18.7958 4.61191 18.3057L2.31703 12.7654C2.11404 12.2753 2.11404 11.7247 2.31703 11.2346L4.61191 5.6943C4.81489 5.20424 5.20424 4.81489 5.6943 4.61191L11.2346 2.31703Z"
        stroke={color}
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
