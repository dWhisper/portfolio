import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ShoppingBag = ({
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
        d="M3.97716 9.8398C4.06066 8.8007 4.92828 8 5.97073 8H18.0293C19.0717 8 19.9393 8.8007 20.0228 9.8398L20.8264 19.8398C20.9199 21.0038 20.0006 22 18.8328 22H5.16716C3.99943 22 3.08005 21.0038 3.17359 19.8398L3.97716 9.8398Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11V6C16 3.79086 14.2091 2 12 2V2C9.79086 2 8 3.79086 8 6V11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
