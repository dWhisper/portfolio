import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const CommandIcon = ({
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
        d="M9.3 17.85C9.3 19.5897 7.8897 21 6.15 21C4.4103 21 3 19.5897 3 17.85C3 16.1103 4.4103 14.7 6.15 14.7H17.85C19.5897 14.7 21 16.1103 21 17.85C21 19.5897 19.5897 21 17.85 21C16.1103 21 14.7 19.5897 14.7 17.85V6.15C14.7 4.4103 16.1103 3 17.85 3C19.5897 3 21 4.4103 21 6.15C21 7.8897 19.5897 9.3 17.85 9.3H6.15C4.4103 9.3 3 7.8897 3 6.15C3 4.4103 4.4103 3 6.15 3C7.8897 3 9.3 4.4103 9.3 6.15V17.85Z"
        stroke={color}
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
