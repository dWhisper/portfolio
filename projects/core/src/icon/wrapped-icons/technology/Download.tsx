import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const DownloadIcon = ({
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
        d="M12 22L12 13M12 22L9.5 20M12 22L14.5 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.03426 9.11737C3.29168 9.54938 2 11.1238 2 13C2 15.2091 3.79086 17 6 17C6 17 6.21895 17 7 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.83 7.13765C15.2238 4.75905 13.0673 3 10.5 3C7.46243 3 5 5.46243 5 8.5C5 8.70871 5.01163 8.9147 5.03426 9.11736C5.03426 9.11736 5.1875 10 5.5 10.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C16.5971 7 16.2053 7.04766 15.83 7.13765L14.5 7.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
