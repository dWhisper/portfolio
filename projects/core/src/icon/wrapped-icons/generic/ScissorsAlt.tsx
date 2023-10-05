import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ScissorsAlt = ({
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
        d="M8.25239 18.4585C7.46121 19.7642 7.10668 21 5.7 21C4.20883 21 3 19.7566 3 18.2227C3 16.6888 4.20883 15.4454 5.7 15.4454C7.09933 15.4454 8.25002 16.5404 8.38646 17.9428C8.40415 18.1247 8.34638 18.3034 8.25239 18.4585ZM8.25239 18.4585L10.2 14.9825M15.7476 18.4585C16.5388 19.7642 16.8933 21 18.3 21C19.7912 21 21 19.7566 21 18.2227C21 16.6888 19.7912 15.4454 18.3 15.4454C16.9007 15.4454 15.75 16.5404 15.6135 17.9428C15.5958 18.1247 15.6536 18.3034 15.7476 18.4585ZM15.7476 18.4585L7.0925 3.34577C6.85481 2.93012 6.28605 2.88822 5.99319 3.26477C4.28916 5.4558 4.45923 8.61442 6.38806 10.5985L15.7476 18.4585ZM11.9506 11.8285L16.9041 3.33473C17.1444 2.92277 17.7104 2.88361 18.0021 3.25876C19.7088 5.45321 19.5385 8.61677 17.6066 10.6039L16.5 11.7423"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
