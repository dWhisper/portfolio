import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PointerLeftFilled = ({
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
        d="M6.6 4.2C7.16656 3.44458 8.05573 3 9 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H9C8.05573 21 7.16656 20.5554 6.6 19.8L2.1 13.8C1.3 12.7333 1.3 11.2667 2.1 10.2L6.6 4.2Z"
        fill={color}
      />
    </StyledSvg>
  );
};
