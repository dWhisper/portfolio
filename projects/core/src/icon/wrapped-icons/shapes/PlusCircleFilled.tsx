import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PlusCircleFilled = ({
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16L11 13L8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44771 11 8 11L11 11L11 8C11 7.44771 11.4477 7 12 7C12.5523 7 13 7.44772 13 8L13 11L16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L13 13L13 16Z"
        fill={color}
      />
    </StyledSvg>
  );
};
