import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const MapIcon = ({
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
        d="M8.36754 4.78918L5.63246 3.87749C4.33739 3.4458 3 4.40974 3 5.77485V17.5585C3 18.4193 3.55086 19.1836 4.36754 19.4558L8.36754 20.7892C8.77808 20.926 9.22192 20.926 9.63246 20.7892L14.3675 19.2108C14.7781 19.074 15.2219 19.074 15.6325 19.2108L18.3675 20.1225C19.6626 20.5542 21 19.5903 21 18.2251V6.44152C21 5.58066 20.4491 4.81638 19.6325 4.54415L15.6325 3.21082C15.2219 3.07397 14.7781 3.07397 14.3675 3.21082L9.63246 4.78918C9.22192 4.92603 8.77808 4.92603 8.36754 4.78918Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 5V21" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M15 3V19"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
