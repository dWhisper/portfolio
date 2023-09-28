import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const GoogleCircle = ({
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
        d="M12 0C5.37246 0 0 5.37267 0 11.9998C0 18.6273 5.37246 24 12 24C18.6271 24 24 18.6274 24 11.9998C24 5.37267 18.6271 0 12 0ZM12.1402 19.0184C8.27229 19.0184 5.13943 15.8776 5.13943 11.9999C5.13943 8.12231 8.27229 4.98151 12.1402 4.98151C14.0305 4.98151 15.6097 5.67893 16.822 6.81071L14.8483 8.78908V8.78461C14.1134 8.08272 13.1815 7.72313 12.1402 7.72313C9.83 7.72313 7.95297 9.67945 7.95297 11.9957C7.95297 14.3114 9.83006 16.2725 12.1402 16.2725C14.2361 16.2725 15.6623 15.0706 15.9558 13.4213H12.1402V10.684H18.725C18.8126 11.1532 18.8605 11.6446 18.8605 12.1578C18.8605 16.1672 16.1831 19.0184 12.1402 19.0184Z"
        fill={color}
      />
    </StyledSvg>
  );
};
