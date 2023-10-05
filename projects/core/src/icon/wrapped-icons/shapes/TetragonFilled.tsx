import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const TetragonFilled = ({
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
        d="M10.6096 2.57591C11.3775 1.80803 12.6225 1.80803 13.3904 2.57591L21.4241 10.6096C22.192 11.3775 22.192 12.6225 21.4241 13.3904L13.3904 21.4241C12.6225 22.192 11.3775 22.192 10.6096 21.4241L2.57591 13.3904C1.80803 12.6225 1.80803 11.3775 2.57591 10.6096L10.6096 2.57591Z"
        fill={color}
      />
    </StyledSvg>
  );
};
