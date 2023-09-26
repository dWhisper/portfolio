import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const AlertCircleFilled = ({
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V7ZM13 16.5C13 15.9477 12.5523 15.5 12 15.5C11.4477 15.5 11 15.9477 11 16.5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V16.5Z"
        fill={color}
      />
    </StyledSvg>
  );
};
