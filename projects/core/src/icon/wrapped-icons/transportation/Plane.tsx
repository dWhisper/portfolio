import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Plane = ({
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
        d="M4 11L2 15L5.40833 16.3633C6.42474 16.7699 7.2301 17.5753 7.63667 18.5917L9 22L13 20L11.7896 17.5792C11.3385 16.677 11.6298 15.5802 12.469 15.0207L14 14L18 21L21 17L18.7106 9.53101L19.4247 8.81689C20.8365 7.40523 22.135 5.13486 20.5 3.5C18.865 1.86514 16.5903 3.15941 15.1841 4.5766L14.4644 5.28519L7 3.00001L3 6L10 10L8.97936 11.531C8.41986 12.3702 7.32299 12.6615 6.42083 12.2104L4 11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
