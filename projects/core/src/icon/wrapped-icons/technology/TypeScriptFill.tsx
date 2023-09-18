import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const TypeScriptFill = ({
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
      <path d="M23.4286 0H0.571429C0.255429 0 0 0.256 0 0.571429V23.4286C0 23.744 0.255429 24 0.571429 24H23.4286C23.7446 24 24 23.744 24 23.4286V0.571429C24 0.256 23.7446 0 23.4286 0ZM14.2857 12.8257H11.4286V21.7143H9.14286V12.8257H6.28571V10.8571H14.2857V12.8257ZM14.9263 21.2069V18.8309C14.9263 18.8309 16.224 19.8091 17.7811 19.8091C19.3383 19.8091 19.2783 18.7909 19.2783 18.6514C19.2783 17.1737 14.8663 17.1737 14.8663 13.9C14.8663 9.448 21.2949 11.2046 21.2949 11.2046L21.2149 13.3211C21.2149 13.3211 20.1366 12.6023 18.9189 12.6023C17.7011 12.6023 17.2617 13.1811 17.2617 13.8C17.2617 15.3971 21.7137 15.2377 21.7137 18.452C21.7143 23.4029 14.9263 21.2069 14.9263 21.2069Z" />
    </StyledSvg>
  );
};
