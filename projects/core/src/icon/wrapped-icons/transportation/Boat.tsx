import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Boat = ({
  size,
  pointerEvents,
  color,
  ...rest
}: StyledSvgProps) => {
  const events = pointerEvents ? "auto" : "none";
  return (
    <StyledSvg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      pointerEvents={events}
      fill={"none"}
      height={size}
      width={size}
      {...rest}
    >
      <path
        d="M16.9259 19.3815L12.6243 20.7949C12.2188 20.9281 11.7812 20.9281 11.3757 20.7949L7.07408 19.3815C5.78136 18.9567 4.79323 17.904 4.45116 16.5869L3 11L12 12L21 11L19.5488 16.5869C19.2068 17.904 18.2186 18.9567 16.9259 19.3815Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.49711 7.25722C6.80084 6.4979 7.53626 6 8.35407 6H15.6459C16.4637 6 17.1992 6.4979 17.5029 7.25722L19 11L12 12L5 11L6.49711 7.25722Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3L12 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 3H13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
