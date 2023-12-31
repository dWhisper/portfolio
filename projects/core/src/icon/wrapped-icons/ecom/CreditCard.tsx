import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const CreditCard = ({
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
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.0156C11.4765 9.39282 10.7105 9 9.85714 9C8.27919 9 7 10.3431 7 12C7 13.6569 8.27919 15 9.85714 15C10.7105 15 11.4765 14.6072 12 13.9844M17 12C17 13.6569 15.7208 15 14.1429 15C12.5649 15 11.2857 13.6569 11.2857 12C11.2857 10.3431 12.5649 9 14.1429 9C15.7208 9 17 10.3431 17 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
