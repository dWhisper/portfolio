import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const InfoCircleFilled = ({
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM11.5 6C10.9477 6 10.5 6.44772 10.5 7C10.5 7.55228 10.9477 8 11.5 8H12C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6H11.5ZM10 10C9.44771 10 9 10.4477 9 11C9 11.5523 9.44771 12 10 12H11V15H10C9.44771 15 9 15.4477 9 16C9 16.5523 9.44771 17 10 17H14C14.5523 17 15 16.5523 15 16C15 15.4477 14.5523 15 14 15H13V11C13 10.4477 12.5523 10 12 10H10Z"
        fill={color}
      />
    </StyledSvg>
  );
};
