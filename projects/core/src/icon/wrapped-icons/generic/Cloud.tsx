import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Cloud = ({
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
        d="M5.03426 11.1174C3.29168 11.5494 2 13.1238 2 15C2 17.2091 3.79086 19 6 19H17C19.7614 19 22 16.7614 22 14C22 11.2386 19.7614 9 17 9C16.5971 9 16.2053 9.04766 15.83 9.13765L14.5 9.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.83 9.13765C15.2238 6.75905 13.0673 5 10.5 5C7.46243 5 5 7.46243 5 10.5C5 10.7087 5.01163 10.9147 5.03426 11.1174C5.03426 11.1174 5.1875 12 5.5 12.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
