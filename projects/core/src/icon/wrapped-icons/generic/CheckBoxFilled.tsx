import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const CheckBoxFilled = ({
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
      width={size}
      fill={"none"}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM15.7295 10.6839C16.1073 10.281 16.0869 9.6482 15.684 9.27047C15.281 8.89274 14.6482 8.91315 14.2705 9.31606L11.1865 12.6056L9.66437 11.2526C9.25159 10.8857 8.61952 10.9229 8.2526 11.3356C7.88568 11.7484 7.92286 12.3805 8.33565 12.7474L10.5856 14.7474C10.9907 15.1075 11.6089 15.0793 11.9795 14.6839L15.7295 10.6839Z"
        fill={color}
      />
    </StyledSvg>
  );
};
