import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const CaretCircleLeftFilled = ({
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM14 8.8C14 8.50496 13.8478 8.23388 13.6039 8.09466C13.36 7.95545 13.0641 7.9707 12.834 8.13436L8.33397 11.3344C8.12533 11.4827 8 11.7325 8 12C8 12.2675 8.12533 12.5173 8.33397 12.6656L12.834 15.8656C13.0641 16.0293 13.36 16.0446 13.6039 15.9053C13.8478 15.7661 14 15.495 14 15.2V8.8Z"
        fill={color}
      />
    </StyledSvg>
  );
};
