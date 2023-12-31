import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PinIcon = ({
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
        d="M5 10.7262L2 11.2308L11.2308 2L10.7262 5M12 16.8814L11.2308 18.9231L18.9231 11.2308L16.8814 12M15.0769 15.0769L21 21M3.53846 9.69231L9.69231 3.53846L9.92825 3.87927C12.0724 6.97631 14.5453 9.83225 17.3038 12.3972L17.5385 12.6154L12.6154 17.5385L12.3972 17.3038C9.83225 14.5453 6.97631 12.0724 3.87927 9.92825L3.53846 9.69231Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
