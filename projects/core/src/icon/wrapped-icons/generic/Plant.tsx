import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Plant = ({
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
        d="M11.9638 6.96986C11.9638 6.96986 8.88872 7.27638 7.27853 5.93455C5.66835 4.59273 6.03618 2.03015 6.03618 2.03015C6.03618 2.03015 9.11128 1.72362 10.7215 3.06545C12.3317 4.40727 11.9638 6.96986 11.9638 6.96986Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0362 6.96986C12.0362 6.96986 15.1113 7.27638 16.7215 5.93455C18.3317 4.59273 17.9638 2.03015 17.9638 2.03015C17.9638 2.03015 14.8887 1.72362 13.2785 3.06545C11.6683 4.40727 12.0362 6.96986 12.0362 6.96986Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 11C4 10.4477 4.44772 10 5 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H5C4.44772 14 4 13.5523 4 13V11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 14H19L17 22H7L5 14Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
