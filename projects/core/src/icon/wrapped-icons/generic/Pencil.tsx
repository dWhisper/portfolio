import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Pencil = ({
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
        d="M4.33295 16.048L16.5714 3.80952C17.5708 2.81015 19.1911 2.81015 20.1905 3.80952C21.1898 4.8089 21.1898 6.4292 20.1905 7.42857L7.952 19.667C7.6728 19.9462 7.3172 20.1366 6.93002 20.214L3 21L3.786 17.07C3.86344 16.6828 4.05375 16.3272 4.33295 16.048Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14.5 6.5L17.5 9.5" stroke={color} strokeWidth="2" />
    </StyledSvg>
  );
};
