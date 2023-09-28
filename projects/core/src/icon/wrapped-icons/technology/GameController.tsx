import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const GameController = ({
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
        d="M8.99996 15L6.03225 17.9677C5.39962 18.6004 4.46385 18.8213 3.61509 18.5384C2.65057 18.2169 2 17.3142 2 16.2975V15L3.35686 8.21555C3.73079 6.34585 5.37246 5 7.27919 5H16.7208C18.6275 5 20.2691 6.34583 20.6431 8.21552L22 15V16.2975C22 17.3142 21.3494 18.2169 20.3849 18.5384C19.5361 18.8213 18.6004 18.6004 17.9678 17.9678L15 15H8.99996Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5L10 7H14L15 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
