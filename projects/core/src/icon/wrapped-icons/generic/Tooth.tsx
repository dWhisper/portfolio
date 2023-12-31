import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Tooth = ({
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
        d="M12 4.36272C9 2.73177 3 1.23131 3 8.27698C3 13.7694 4.18772 18.0329 6.005 20.4184C6.65015 21.2652 8.22118 21.0022 8.89263 20.1534C8.96998 20.0557 9.02229 19.9413 9.06658 19.8248L10.1304 17.0253C10.7838 15.3059 13.2162 15.3059 13.8696 17.0253L14.9334 19.8248C14.9777 19.9413 15.03 20.0557 15.1074 20.1534C15.7788 21.0022 17.3498 21.2652 17.995 20.4184C19.8123 18.0329 21 13.7694 21 8.27698C21 1.23131 15 2.73177 12 4.36272ZM12 4.36272L15 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
