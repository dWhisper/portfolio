import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const QuestionCircle = ({
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
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <path
        d="M10 8.48352C10.5 7.49451 11 7 12 7C13.2461 7 14 7.98901 14 8.97802C14 9.96703 13.5 10.4615 12 11.4505V13M12 16.5V17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};
