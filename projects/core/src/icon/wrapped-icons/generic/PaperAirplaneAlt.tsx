import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PaperAirplaneAlt = ({
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
        d="M9.91158 12H7.45579H4L2.02268 4.13539C2.0111 4.0893 2.00193 4.04246 2.00046 3.99497C1.97811 3.27397 2.77209 2.77366 3.46029 3.10388L22 12L3.46029 20.8961C2.77983 21.2226 1.99597 20.7372 2.00002 20.0293C2.00038 19.9658 2.01455 19.9032 2.03296 19.8425L3.5 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
