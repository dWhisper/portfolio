import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Cake = ({
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
        d="M3 13C3 10.7909 4.79086 9 7 9H17C19.2091 9 21 10.7909 21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 13L5.91369 15.331C7.10143 16.2811 8.81369 16.1863 9.88923 15.1108V15.1108C11.055 13.945 12.945 13.945 14.1108 15.1108V15.1108C15.1863 16.1863 16.8986 16.2811 18.0863 15.331L21 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 6C10.8954 6 10 5.10457 10 4C10 3.12447 10.6774 2.42429 11.2732 1.78271L12 1L12.7268 1.78271C13.3226 2.42429 14 3.12447 14 4C14 5.10457 13.1046 6 12 6Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
