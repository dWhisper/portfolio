import React from "react";
import { StyledSvg } from "../Icon.styled";
import { StyledSvgProps } from "../Icon.types";

export const AngularFill = ({
  size,
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
      width={size}
      {...rest}
    >
      <path d="M10.1739 12.594H13.8259L11.9999 8.095L10.1739 12.594Z" />
      <path d="M12 1L2 4.652L3.52524 18.193L12 23L20.4748 18.193L22 4.652L12 1ZM18.2406 17.786H15.9098L14.6531 14.574H9.34694L8.09022 17.786H5.7594L12 3.431L18.2406 17.786Z" />
    </StyledSvg>
  );
};
