import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const TagIcon = ({
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
        d="M15.244 21.366C14.3988 22.2113 13.0283 22.2113 12.183 21.366L3.63396 12.817C3.22804 12.4111 3 11.8605 3 11.2865V5.16446C3 3.96906 3.96906 3 5.16446 3H11.2865C11.8605 3 12.4111 3.22804 12.817 3.63396L21.366 12.183C22.2113 13.0283 22.2113 14.3988 21.366 15.244L15.244 21.366Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 6.5L7 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};
