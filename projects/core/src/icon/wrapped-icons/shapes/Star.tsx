import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Star = ({
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
        d="M11.0739 2.63302C11.3948 1.78899 12.6052 1.78899 12.9261 2.63303L14.9962 8.36698C15.141 8.74774 15.51 9 15.9223 9H21.009C21.9483 9 22.3586 10.1703 21.6201 10.7427L18 14C17.6667 14.2583 17.5373 14.6975 17.6784 15.0918L19 20.6951C19.3218 21.5943 18.2791 22.3679 17.4925 21.8136L12.5749 18.6946C12.231 18.4523 11.769 18.4523 11.4251 18.6946L6.50755 21.8136C5.72088 22.3679 4.67825 21.5943 5 20.6951L6.32161 15.0918C6.4627 14.6975 6.33334 14.2583 6 14L2.37994 10.7427C1.64136 10.1703 2.05172 9 2.991 9H8.07767C8.48996 9 8.85899 8.74774 9.00376 8.36698L11.0739 2.63302Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
