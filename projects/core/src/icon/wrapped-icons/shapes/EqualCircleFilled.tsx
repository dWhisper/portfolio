import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const EqualCircleFilled = ({
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
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7 14C7 13.4477 7.44772 13 8 13L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L8 15C7.44771 15 7 14.5523 7 14ZM8 9C7.44772 9 7 9.44771 7 10C7 10.5523 7.44771 11 8 11L16 11C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9.00001 16 9.00001L8 9Z"
        fill={color}
      />
    </StyledSvg>
  );
};
