import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ChevronCircleLeftFilled = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM14.2071 8.70711C14.5976 8.31658 14.5976 7.68342 14.2071 7.29289C13.8166 6.90237 13.1834 6.90237 12.7929 7.29289L8.79289 11.2929C8.40237 11.6834 8.40237 12.3166 8.79289 12.7071L12.7929 16.7071C13.1834 17.0976 13.8166 17.0976 14.2071 16.7071C14.5976 16.3166 14.5976 15.6834 14.2071 15.2929L10.9142 12L14.2071 8.70711Z"
        fill={color}
      />
    </StyledSvg>
  );
};
