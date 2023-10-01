import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PointerUpFilled = ({
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
        d="M20.05 6.35C20.8054 6.91656 21.25 7.80573 21.25 8.75V19.75C21.25 21.4069 19.9069 22.75 18.25 22.75H6.25C4.59315 22.75 3.25 21.4069 3.25 19.75V8.75C3.25 7.80573 3.69458 6.91656 4.45 6.35L10.45 1.85C11.5167 1.05 12.9833 1.05 14.05 1.85L20.05 6.35Z"
        fill={color}
      />
    </StyledSvg>
  );
};
