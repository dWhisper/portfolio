import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PointerDownFilled = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.05 17.65C20.8054 17.0834 21.25 16.1943 21.25 15.25V4.25C21.25 2.59315 19.9069 1.25 18.25 1.25H6.25C4.59315 1.25 3.25 2.59315 3.25 4.25V15.25C3.25 16.1943 3.69458 17.0834 4.45 17.65L10.45 22.15C11.5167 22.95 12.9833 22.95 14.05 22.15L20.05 17.65Z"
        fill={color}
      />
    </StyledSvg>
  );
};
