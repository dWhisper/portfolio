import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Heptagon = ({
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
        d="M11.1142 2.43753C11.6725 2.16175 12.3274 2.16175 12.8858 2.43752L19.1609 5.53717C19.7037 5.80531 20.0959 6.30493 20.2274 6.89592L21.7955 13.9432C21.925 14.5252 21.7882 15.1346 21.4222 15.6052L17.051 21.2276C16.6721 21.7149 16.0893 22 15.472 22H8.52798C7.91067 22 7.32795 21.7149 6.94905 21.2276L2.57778 15.6052C2.21185 15.1346 2.07497 14.5252 2.20446 13.9432L3.77264 6.89592C3.90415 6.30493 4.2963 5.80531 4.83914 5.53717L11.1142 2.43753Z"
        stroke={color}
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
