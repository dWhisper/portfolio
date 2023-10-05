import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Sparkles = ({
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
        d="M5 2L5.18994 2.94059C5.46707 4.31294 6.44154 5.44052 7.75926 5.91357L8 6L7.75926 6.08643C6.44154 6.55948 5.46707 7.68706 5.18994 9.05941L5 10L4.81006 9.05941C4.53293 7.68706 3.55846 6.55948 2.24074 6.08643L2 6L2.24074 5.91357C3.55846 5.44052 4.53293 4.31294 4.81006 2.94059L5 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16L8.22908 17.2762C8.35055 17.9529 8.81113 18.5198 9.44865 18.7773L10 19L9.44865 19.2227C8.81113 19.4802 8.35055 20.0471 8.22908 20.7238L8 22L7.77092 20.7238C7.64945 20.0471 7.18888 19.4802 6.55135 19.2227L6 19L6.55135 18.7773C7.18887 18.5198 7.64945 17.9529 7.77092 17.2762L8 16Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3L16.5557 5.65372C17.1321 8.40618 19.1114 10.6539 21.7688 11.5738L23 12L21.7688 12.4262C19.1114 13.3461 17.1321 15.5938 16.5557 18.3463L16 21L15.4443 18.3463C14.8679 15.5938 12.8886 13.3461 10.2312 12.4262L9 12L10.2312 11.5738C12.8886 10.6539 14.8679 8.40618 15.4443 5.65372L16 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
