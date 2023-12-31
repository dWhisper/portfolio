import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Hexagon = ({
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
        d="M11.0287 2.5396C11.6328 2.20402 12.3672 2.20402 12.9713 2.5396L19.9713 6.42849C20.6062 6.78123 21 7.45047 21 8.17681V15.8232C21 16.5495 20.6062 17.2188 19.9713 17.5715L12.9713 21.4604C12.3672 21.796 11.6328 21.796 11.0287 21.4604L4.02871 17.5715C3.39378 17.2188 3 16.5495 3 15.8232V8.17681C3 7.45047 3.39378 6.78123 4.02871 6.42849L11.0287 2.5396Z"
        stroke={color}
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
