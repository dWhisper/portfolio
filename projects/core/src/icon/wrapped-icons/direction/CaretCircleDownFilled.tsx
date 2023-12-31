import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const CaretCircleDownFilled = ({
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM8.8 10C8.50496 10 8.23388 10.1522 8.09466 10.3961C7.95545 10.64 7.9707 10.9359 8.13436 11.166L11.3344 15.666C11.4827 15.8747 11.7325 16 12 16C12.2675 16 12.5173 15.8747 12.6656 15.666L15.8656 11.166C16.0293 10.9359 16.0446 10.64 15.9053 10.3961C15.7661 10.1522 15.495 10 15.2 10H8.8Z"
        fill={color}
      />
    </StyledSvg>
  );
};
