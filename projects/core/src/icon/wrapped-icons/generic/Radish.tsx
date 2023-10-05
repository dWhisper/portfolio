import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Radish = ({
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
        d="M16 10H8C5.81214 10 4.30164 11.4146 4.06463 13.282C3.7396 15.8428 4.59366 17.3866 7.69879 18.4102C9.09338 18.8699 10.2777 19.8744 10.7096 21.2778L10.9318 22L11.0272 21.9181C11.6762 21.3609 12.4103 20.9114 13.2016 20.5867L15.1231 19.7982C18.4086 18.45 20.3438 16.3901 19.9493 13.282C19.7123 11.4146 18.1879 10 16 10Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        d="M19 11.5C18.5 12.5 15.866 13 12 13C8.13401 13 5.5 12.5 5 11.5"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
