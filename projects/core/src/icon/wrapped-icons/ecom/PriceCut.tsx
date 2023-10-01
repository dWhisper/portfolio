import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const PriceCut = ({
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
        d="M2 7V15C2 16.1046 2.89543 17 4 17H5M2 7V5C2 3.89543 2.89543 3 4 3H6M2 7C4.20914 7 6 5.20914 6 3M6 3H19M9.76389 12C9.28885 11.4692 9 10.7684 9 10C9 8.34315 10.3431 7 12 7C12.7684 7 13.4692 7.28885 14 7.76389M2 20L20 2M21.2206 18.0474L21.7685 11.7856C21.8441 10.9211 21.1708 10.1559 20.2646 10.0766L19.4442 10.0049M21.2206 18.0474L21.0837 19.6129C21.008 20.4774 20.2121 21.1141 19.3059 21.0348L17.6651 20.8912M21.2206 18.0474C19.4083 17.8889 17.8164 19.1621 17.6651 20.8912M17.6651 20.8912L7 19.9581M11.3472 16.4812C11.7558 17.001 12.2878 17.2659 13.0167 17.3297C14.376 17.4486 15.5698 16.4937 15.6833 15.1968C15.7442 14.5014 15.5977 13.9281 15.1318 13.4541"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
