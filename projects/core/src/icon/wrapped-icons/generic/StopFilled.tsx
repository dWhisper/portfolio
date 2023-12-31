import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const StopFilled = ({
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
        d="M8 1C7.73033 1 7.47208 1.10892 7.28386 1.30204L1.28386 7.45829C1.10186 7.64503 1 7.89548 1 8.15625V16C1 16.2652 1.10536 16.5196 1.29289 16.7071L7.29289 22.7071C7.48043 22.8946 7.73478 23 8 23H16C16.2652 23 16.5196 22.8946 16.7071 22.7071L22.7071 16.7071C22.8946 16.5196 23 16.2652 23 16V8.15625C23 7.89548 22.8981 7.64503 22.7161 7.45829L16.7161 1.30204C16.5279 1.10892 16.2697 1 16 1H8ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13L16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11L8 11Z"
        fill={color}
      />
    </StyledSvg>
  );
};
