import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ShieldFilled = ({
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
        d="M13.1469 21.1972L14.8163 20.0286C19.1794 16.9744 21.3182 11.6252 20.2636 6.40484C20.212 6.14963 20.0447 5.93295 19.8108 5.8186L12 2L4.18923 5.8186C3.95533 5.93295 3.78795 6.14963 3.7364 6.40484C2.68177 11.6252 4.82058 16.9744 9.18369 20.0286L10.8531 21.1972C11.5417 21.6792 12.4583 21.6792 13.1469 21.1972Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
      />
    </StyledSvg>
  );
};
