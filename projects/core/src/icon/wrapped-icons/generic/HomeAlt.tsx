import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const HomeAlt = ({
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
        d="M21 19V12.2672C21 11.1708 20.5499 10.1224 19.755 9.36725L13.3775 3.30862C12.6056 2.57529 11.3944 2.57529 10.6225 3.30863L4.245 9.36725C3.45008 10.1224 3 11.1708 3 12.2672V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15C9 13.8954 9.89543 13 11 13H13C14.1046 13 15 13.8954 15 15V21H9V15Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
