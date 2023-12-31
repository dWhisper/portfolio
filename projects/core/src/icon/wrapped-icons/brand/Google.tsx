import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Google = ({
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
        d="M21.4561 10.1543C21.5793 10.8125 21.6466 11.5016 21.6466 12.2214C21.6466 17.8447 17.8819 21.8438 12.197 21.8438C6.75844 21.8438 2.35327 17.4386 2.35327 12C2.35327 6.56142 6.75844 2.15625 12.197 2.15625C14.855 2.15625 17.0756 3.13439 18.7801 4.72172L16.005 7.49658V7.49025C14.9716 6.50578 13.6612 6.00141 12.197 6.00141C8.94872 6.00141 6.30933 8.74533 6.30933 11.994C6.30933 15.2419 8.94868 17.9925 12.197 17.9925C15.1441 17.9925 17.1495 16.3066 17.5623 13.9935H12.197V10.1543H21.4561Z"
        fill={color}
      />
    </StyledSvg>
  );
};
