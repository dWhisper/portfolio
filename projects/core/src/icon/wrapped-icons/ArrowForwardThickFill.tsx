import React from "react";
import { StyledSvg } from "../Icon.styled";
import { StyledSvgProps } from "../Icon.types";

export const ArrowForwardThickFill = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6755 1.05412C15.0796 0.915483 15.5271 1.04884 15.7894 1.38606L22.7894 10.3861C23.0702 10.7472 23.0702 11.2528 22.7894 11.6139L15.7893 20.6139C15.5271 20.9512 15.0795 21.0845 14.6754 20.9459C14.2714 20.8072 14 20.4272 14 20V16.0102C8.62121 16.1223 6.03693 17.1431 4.7387 18.2532C3.50462 19.3085 3.27986 20.5489 3.04424 21.8492C3.0241 21.9603 3.00387 22.0719 2.98294 22.1838C2.89017 22.6798 2.44239 23.029 1.93873 22.9981C1.43506 22.9672 1.03334 22.5659 1.00192 22.0623C0.830491 19.3143 1.08786 15.3323 3.02912 12.0007C4.91291 8.7677 8.30549 6.28195 14 6.02241L14 1.99999C14 1.57279 14.2714 1.19277 14.6755 1.05412Z"
      />
    </StyledSvg>
  );
};