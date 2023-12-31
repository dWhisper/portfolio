import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Telescope = ({
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
        d="M7 21L13 13L21 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.22772 7.30331L18.7602 2.24395C19.1523 2.09735 19.5942 2.21051 19.8676 2.52753L20.0582 2.74844C21.3109 4.20094 22 6.05518 22 7.97325V8.58943C22 9.00664 21.741 9.38 21.3502 9.52611L7.81421 14.5868L5.22772 7.30331Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.65966 11.371C2.29401 10.339 2.82602 9.2049 3.8533 8.82636L5.54717 8.20219L7.49094 13.6745L5.8515 14.2874C4.80423 14.679 3.63937 14.1359 3.26595 13.082L2.65966 11.371Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 13L13 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
