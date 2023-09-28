import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const History = ({
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
        d="M4.26588 16.0598C5.11915 17.778 6.49129 19.1725 8.18077 20.0384C9.87025 20.9043 11.788 21.1959 13.6524 20.8705C15.5167 20.545 17.2294 19.6196 18.5388 18.2302C19.8482 16.8407 20.6854 15.0606 20.9273 13.1511C21.1693 11.2416 20.8032 9.30348 19.8829 7.6214C18.9627 5.93933 17.5367 4.60195 15.8144 3.80573C14.0922 3.0095 12.1645 2.79638 10.3145 3.19769C8.46444 3.59899 6.94827 4.51138 5.69464 5.95312C5.54284 6.11323 4.9593 6.75937 4.4742 7.73437M7.5 8L3.89097 8.71974L3 5M12 9V13L15 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
