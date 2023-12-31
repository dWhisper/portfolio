import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const AugmentedReality = ({
  size,
  pointerEvents,
  color,
  ...rest
}: StyledSvgProps) => {
  const events = pointerEvents ? "auto" : "none";
  return (
    <StyledSvg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      pointerEvents={events}
      fill={"none"}
      height={size}
      width={size}
      {...rest}
    >
      <path
        d="M10.971 6.6174C11.6044 6.23738 12.3956 6.23738 13.029 6.61739L16.5145 8.7087C16.8157 8.88942 17 9.21493 17 9.56619V13.8676C17 14.5701 16.6314 15.2212 16.029 15.5826L13.029 17.3826C12.3956 17.7626 11.6044 17.7626 10.971 17.3826L7.97101 15.5826C7.3686 15.2212 7 14.5701 7 13.8676V9.56619C7 9.21493 7.1843 8.88942 7.4855 8.7087L10.971 6.6174Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9L12 11.7586M12 11.7586L17 9M12 11.7586V17"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 2H4C2.89543 2 2 2.89543 2 4V6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 22L20 22C21.1046 22 22 21.1046 22 20L22 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L22 4C22 2.89543 21.1046 2 20 2L18 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 18L2 20C2 21.1046 2.89543 22 4 22L6 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
