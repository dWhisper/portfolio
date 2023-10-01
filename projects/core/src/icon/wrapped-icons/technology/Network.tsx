import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Network = ({
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
      <circle cx="18" cy="5" r="3" stroke={color} strokeWidth="2" />
      <circle cx="18" cy="19" r="3" stroke={color} strokeWidth="2" />
      <circle cx="6" cy="12" r="3" stroke={color} strokeWidth="2" />
      <path
        d="M15.408 6.51199L8.59436 10.4866M15.408 17.488L8.59436 13.5134"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
