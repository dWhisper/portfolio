import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ThumbsDownFilled = ({
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
        d="M12.3951 18.2179L12.1659 20.5867C12.0737 21.5388 11.1854 22.1847 10.2872 21.9526C8.93568 21.6034 7.98754 20.3484 7.98754 18.9086L7.98754 15.8738C7.98754 15.1988 7.98754 14.8613 7.84097 14.6131C7.75806 14.4727 7.64394 14.3548 7.5081 14.2691C7.26797 14.1176 6.94141 14.1176 6.28828 14.1176H5.89197C4.18918 14.1176 3.33779 14.1176 2.81356 13.7271C2.42145 13.4351 2.14483 13.0063 2.03478 12.5199C1.88765 11.8696 2.21511 11.0574 2.87003 9.43293L3.19654 8.62306C3.38511 8.15533 3.46228 7.64765 3.42157 7.1427C3.18988 4.26937 5.46934 1.84756 8.25492 2.0075L18.6793 2.60602C19.8177 2.67138 20.3869 2.70406 20.9014 3.15924C21.4159 3.61442 21.5127 4.08306 21.7063 5.02034C21.8714 5.81926 22 6.79877 22 7.91121C22 9.14499 21.8418 10.2153 21.6512 11.057C21.3684 12.3055 20.1758 12.9769 18.9447 12.8178C15.6811 12.3962 12.7223 14.8357 12.3951 18.2179Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
      />
      <path
        d="M17 12.5L17.137 12.0434C18.024 9.08677 17.9761 5.92838 17 3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
