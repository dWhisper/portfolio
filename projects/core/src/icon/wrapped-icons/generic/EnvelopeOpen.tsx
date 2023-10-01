import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const EnvelopeOpen = ({
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
        d="M2 11.0826C2 9.77737 2.63684 8.55422 3.70615 7.8057L9.70615 3.6057C11.0834 2.64161 12.9166 2.6416 14.2938 3.6057L20.2938 7.8057C21.3632 8.55421 22 9.77737 22 11.0826V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V11.0826Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 9.5L9.50122 15.001C10.9621 16.1697 13.0379 16.1697 14.4988 15.001L21.5 9.5"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
