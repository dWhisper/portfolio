import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const HeptagonFilled = ({
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
        d="M11.1142 1.43752C11.6726 1.16175 12.3274 1.16175 12.8858 1.43752L19.9628 4.9333C20.5056 5.20144 20.8978 5.70105 21.0293 6.29205L22.7955 14.2294C22.925 14.8114 22.7882 15.4208 22.4222 15.8914L17.496 22.2276C17.1171 22.7149 16.5344 23 15.9171 23H8.08294C7.46563 23 6.88291 22.7149 6.504 22.2276L1.57778 15.8914C1.21185 15.4208 1.07497 14.8114 1.20446 14.2294L2.9707 6.29205C3.10221 5.70105 3.49436 5.20144 4.0372 4.9333L11.1142 1.43752Z"
        fill={color}
      />
    </StyledSvg>
  );
};
