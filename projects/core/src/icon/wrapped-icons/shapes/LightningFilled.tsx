import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const LightningFilled = ({
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
        d="M17.6842 3.60279C18.2055 2.944 17.7132 2 16.8484 2H10.1317C9.75652 2 9.40996 2.19159 9.22321 2.50227L4.14052 10.9577C3.73978 11.6243 4.2439 12.4554 5.04904 12.4554H8.47764L5.24755 20.5203C4.78108 21.5406 6.04257 22.473 6.89092 21.735L20 9.33119H13.151L17.6842 3.60279Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
      />
    </StyledSvg>
  );
};
