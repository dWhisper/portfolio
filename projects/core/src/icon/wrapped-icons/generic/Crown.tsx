import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Crown = ({
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
        d="M2 8L3.30352 9.04282C5.2368 10.5894 8.09658 10.0262 9.29894 7.86192L12 3L14.7011 7.86191C15.9034 10.0262 18.7632 10.5894 20.6965 9.04282L22 8L20.2459 16.7706C20.0907 17.5463 19.5862 18.2069 18.8786 18.5607V18.5607C14.5484 20.7258 9.45158 20.7258 5.1214 18.5607V18.5607C4.41385 18.2069 3.90926 17.5463 3.75412 16.7706L2 8Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15C10.5964 16.3333 13.4036 16.3333 16 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
