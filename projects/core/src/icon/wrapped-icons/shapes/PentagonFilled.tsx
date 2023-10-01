import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PentagonFilled = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1259 2.21864C11.2216 1.34212 12.7784 1.34212 13.8741 2.21864L21.5041 8.32262C22.5088 9.12637 22.8891 10.4813 22.4494 11.6905L19.4185 20.0252C18.9874 21.2108 17.8607 22 16.5992 22H7.40087C6.13935 22 5.01261 21.2108 4.58149 20.0252L1.55067 11.6905C1.11097 10.4813 1.49127 9.12637 2.49596 8.32262L10.1259 2.21864Z"
        fill={color}
      />
    </StyledSvg>
  );
};
