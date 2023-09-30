import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Jar = ({
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
        d="M3 9L4.16427 17.9261C4.3674 19.4834 5.49056 20.7641 7.0081 21.1688V21.1688C10.2789 22.041 13.7211 22.041 16.9919 21.1688V21.1688C18.5094 20.7641 19.6326 19.4834 19.8357 17.9261L21 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.03541 7.26646C3.76335 7.66067 3 8.16484 3 8.71428C3 9.97665 7.02944 11 12 11C16.9706 11 21 9.97665 21 8.71428C21 8.16468 20.2362 7.66038 18.9635 7.26611"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 4L6 4.50926C4.15875 4.87548 3 5.40767 3 6C3 7.10457 7.02944 8 12 8C16.9706 8 21 7.10457 21 6C21 5.40767 19.8412 4.87548 18 4.50926L15 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 4V4C15 2.89543 14.1046 2 13 2H11C9.89543 2 9 2.89543 9 4V4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
