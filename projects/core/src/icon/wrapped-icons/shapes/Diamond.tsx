import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Diamond = ({
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
        d="M4.51095 13.5419C3.82968 12.6903 3.82968 11.3097 4.51095 10.4581L10.7665 2.63869C11.4477 1.7871 12.5523 1.7871 13.2335 2.63869L19.489 10.4581C20.1703 11.3097 20.1703 12.6903 19.489 13.5419L13.2335 21.3613C12.5523 22.2129 11.4477 22.2129 10.7665 21.3613L4.51095 13.5419Z"
        stroke={color}
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
