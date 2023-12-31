import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Pentagon = ({
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
        d="M10.7506 2.99951C11.481 2.41516 12.519 2.41516 13.2494 2.99951L20.8794 9.10349C21.5492 9.63932 21.8027 10.5426 21.5096 11.3487L18.4787 19.6835C18.1913 20.4739 17.4402 21 16.5991 21H7.40085C6.55984 21 5.80868 20.4739 5.52127 19.6835L2.49044 11.3487C2.19731 10.5426 2.45084 9.63933 3.12064 9.10349L10.7506 2.99951Z"
        stroke={color}
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
