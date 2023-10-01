import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PaperAirplane = ({
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
        d="M9.47352 16L18.6551 19.2839C19.3153 19.5187 20.0251 19.0877 20.1166 18.3965L21.9901 4.23876C22.1041 3.37714 21.211 2.73364 20.423 3.1097L2.62425 11.6043C1.74315 12.0248 1.80959 13.2936 2.72985 13.6208L5.17081 14.4888L6.5 14.9557M13 17.2613L11.0106 20.5872C10.3608 21.3948 9.051 20.938 9.051 19.9038V17.2396C9.051 16.7372 9.24005 16.2532 9.58055 15.8839L13.4524 11.6842"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
