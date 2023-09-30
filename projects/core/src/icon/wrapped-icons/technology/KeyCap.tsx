import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const KeyCap = ({
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
        d="M7 3C7 3 10 3.5 12 3.5C14 3.5 17 3 17 3L18 12C18 12 15 13 12 13C9 13 6 12 6 12L7 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.86857 8.14702L3.00694 18.4411C2.97634 18.8067 3.04731 19.1735 3.21208 19.5016L3.40935 19.8944C3.74963 20.572 4.44521 21 5.2061 21H18.7939C19.5548 21 20.2504 20.572 20.5907 19.8944L20.7879 19.5016C20.9527 19.1735 21.0237 18.8067 20.9931 18.4411L20.1314 8.14702C20.0687 7.39755 19.795 6.68086 19.3418 6.0792L17 3C17 3 14 3.5 12 3.5C10 3.5 6.97782 3 6.97782 3L4.65822 6.0792C4.20498 6.68086 3.9313 7.39755 3.86857 8.14702Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12L3.5 20M18 12L20.5 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
