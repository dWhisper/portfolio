import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const SoundUp = ({
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
        d="M19 9L19 12M19 12L19 15M19 12L22 12M19 12L16 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2 14.9588L2 9.04123C2 8.46617 2.44772 8 3 8H6.58579C6.851 8 7.10536 7.8903 7.29289 7.69503L10.2929 4.30706C10.9229 3.65112 12 4.11568 12 5.04332V18.9567C12 19.8908 10.91 20.3524 10.2839 19.6834L7.29437 16.3145C7.10615 16.1134 6.84791 16 6.57824 16H3C2.44772 16 2 15.5338 2 14.9588Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
