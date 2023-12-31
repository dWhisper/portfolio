import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ChevronCircleUpFilled = ({
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM8.70711 14.2071C8.31658 14.5976 7.68342 14.5976 7.29289 14.2071C6.90237 13.8166 6.90237 13.1834 7.29289 12.7929L11.2929 8.79289C11.6834 8.40237 12.3166 8.40237 12.7071 8.79289L16.7071 12.7929C17.0976 13.1834 17.0976 13.8166 16.7071 14.2071C16.3166 14.5976 15.6834 14.5976 15.2929 14.2071L12 10.9142L8.70711 14.2071Z"
        fill={color}
      />
    </StyledSvg>
  );
};
