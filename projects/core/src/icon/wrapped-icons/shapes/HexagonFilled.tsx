import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const HexagonFilled = ({
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
        d="M11.0362 1.53011C11.6363 1.20002 12.3637 1.20002 12.9638 1.53011L20.9638 5.93011C21.6029 6.28161 22 6.95316 22 7.68254V16.3175C22 17.0468 21.6029 17.7184 20.9638 18.0699L12.9638 22.4699C12.3637 22.8 11.6363 22.8 11.0362 22.4699L3.03616 18.0699C2.39707 17.7184 2 17.0468 2 16.3175V7.68254C2 6.95316 2.39707 6.28161 3.03616 5.93011L11.0362 1.53011Z"
        fill={color}
      />
    </StyledSvg>
  );
};
