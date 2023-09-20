import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const BookClose = ({
  size,
  pointerEvents,
  color,
  ...rest
}: StyledSvgProps) => {
  const events = pointerEvents ? "auto" : "none";
  return (
    <StyledSvg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      pointerEvents={events}
      fill={"none"}
      height={size}
      width={size}
      {...rest}
    >
      <path
        d="M4 4.22222V19.7778C4 21.0051 5.02335 22 6.28571 22H17.7143C18.9767 22 20 21.0051 20 19.7778V8.44444C20 7.33988 19.1046 6.44444 18 6.44444H6.28571C5.02335 6.44444 4 5.44952 4 4.22222ZM4 4.22222C4 2.99492 5.02335 2 6.28571 2H15.4286C16.6909 2 17.7143 2.99492 17.7143 4.22222V6.44444"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
