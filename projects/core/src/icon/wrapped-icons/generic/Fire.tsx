import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Fire = ({
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
        d="M12 22C7.02944 22 3 19.4183 3 15V14.9123C3 12.7937 4.33756 11.0994 6.375 10C8.324 8.94833 9.4761 7.01036 9.1875 5L8.625 2L10.7108 2.79459C14.4676 4.22574 17.5971 6.70655 19.6249 9.86098C20.526 11.2627 21 12.8492 21 14.4636V15C21 16.5624 20.4961 17.8952 19.6249 18.9653"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C10.3431 22 9 20.5673 9 18.8C9 17.3992 10.0162 16.2789 10.9098 15.2523L12 14L13.0902 15.2523C13.9838 16.2789 15 17.3992 15 18.8C15 20.5673 13.6569 22 12 22Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
