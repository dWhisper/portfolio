import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Health = ({
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
        d="M16 3C16 2.44772 15.5523 2 15 2H9C8.44772 2 8 2.44772 8 3V8L3 8C2.44772 8 2 8.44771 2 9V15C2 15.5523 2.44772 16 3 16H8V21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21V16H21C21.5523 16 22 15.5523 22 15V9C22 8.44772 21.5523 8 21 8L16 8V3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
