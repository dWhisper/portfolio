import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const MusicNote = ({
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
        d="M12 4L12 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 7.67427V7.01721C19 5.23128 17.8161 3.66174 16.0989 3.17111L13.2747 2.36421C12.6359 2.18169 12 2.66135 12 3.32573V7L17.7253 8.63579C18.3641 8.81831 19 8.33865 19 7.67427Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M12 18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 16 9 16C10.6569 16 12 16.3431 12 18Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
