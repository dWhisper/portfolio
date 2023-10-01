import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PeopleMultiple = ({
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
      <circle cx="7" cy="5" r="3" stroke={color} strokeWidth="2" />
      <path
        d="M10 12H7H5.89835C4.38538 12 3.10917 13.1266 2.92151 14.6279L2.28101 19.7519C2.1318 20.9456 3.06257 22 4.26556 22H9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.719 19.7519L21.0785 14.6279C20.8908 13.1266 19.6146 12 18.1017 12H17H15.8983C14.3854 12 13.1092 13.1266 12.9215 14.6279L12.281 19.7519C12.1318 20.9456 13.0626 22 14.2656 22H19.7344C20.9374 22 21.8682 20.9456 21.719 19.7519Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="5" r="3" stroke={color} strokeWidth="2" />
    </StyledSvg>
  );
};
