import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Codepen = ({
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
        d="M11.372 0.189436C11.7526 -0.0631454 12.2474 -0.0631454 12.628 0.189436L23.4922 7.39931C23.8094 7.60977 24 7.96507 24 8.34568V15.6543C24 16.0349 23.8094 16.3902 23.4922 16.6007L12.628 23.8106C12.2474 24.0631 11.7526 24.0631 11.372 23.8106L0.507759 16.6007C0.190634 16.3902 0 16.0349 0 15.6543V8.34568C0 7.96507 0.190634 7.60977 0.507759 7.39931L11.372 0.189436ZM2.27161 10.4626V13.5213L4.56046 11.9816L2.27161 10.4626ZM6.60915 13.3411L3.1802 15.6479L10.8642 20.7473V16.165L6.60915 13.3411ZM13.1358 16.165V20.7473L20.8198 15.6479L17.3909 13.3411L13.1358 16.165ZM19.4395 11.9816L21.7284 13.5213V10.4626L19.4395 11.9816ZM20.8101 8.34568L17.3994 10.6091L13.1358 7.74087V3.25272L20.8101 8.34568ZM10.8642 3.25272V7.74087L6.60056 10.6091L3.18988 8.34568L10.8642 3.25272ZM12 9.71457L8.64925 11.9687L12 14.1924L15.3508 11.9687L12 9.71457Z"
        fill={color}
      />
    </StyledSvg>
  );
};
