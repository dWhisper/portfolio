import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const CheckCircleFilled = ({
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM16.7682 10.1402C17.1218 9.7159 17.0645 9.08534 16.6402 8.73177C16.2159 8.37821 15.5853 8.43553 15.2318 8.85981L10.9328 14.0186L8.70711 11.7929C8.31658 11.4024 7.68342 11.4024 7.29289 11.7929C6.90237 12.1834 6.90237 12.8166 7.29289 13.2071L10.2929 16.2071C10.4916 16.4058 10.7646 16.5117 11.0453 16.499C11.326 16.4862 11.5884 16.356 11.7682 16.1402L16.7682 10.1402Z"
        fill={color}
      />
    </StyledSvg>
  );
};
