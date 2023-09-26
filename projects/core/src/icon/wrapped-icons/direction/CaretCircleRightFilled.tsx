import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const CaretCircleRightFilled = ({
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10 8.8C10 8.50496 10.1522 8.23388 10.3961 8.09466C10.64 7.95545 10.9359 7.9707 11.166 8.13436L15.666 11.3344C15.8747 11.4827 16 11.7325 16 12C16 12.2675 15.8747 12.5173 15.666 12.6656L11.166 15.8656C10.9359 16.0293 10.64 16.0446 10.3961 15.9053C10.1522 15.7661 10 15.495 10 15.2V8.8Z"
        fill={color}
      />
    </StyledSvg>
  );
};
