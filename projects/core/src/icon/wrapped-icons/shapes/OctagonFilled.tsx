import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const OctagonFilled = ({
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
        d="M11.2346 1.31703C11.7247 1.11404 12.2753 1.11404 12.7654 1.31703L19.0128 3.9048C19.5029 4.10779 19.8922 4.49714 20.0952 4.98719L22.683 11.2346C22.886 11.7247 22.886 12.2753 22.683 12.7654L20.0952 19.0128C19.8922 19.5029 19.5029 19.8922 19.0128 20.0952L12.7654 22.683C12.2753 22.886 11.7247 22.886 11.2346 22.683L4.98719 20.0952C4.49714 19.8922 4.10779 19.5029 3.9048 19.0128L1.31703 12.7654C1.11404 12.2753 1.11404 11.7247 1.31703 11.2346L3.9048 4.98719C4.10779 4.49714 4.49714 4.10779 4.98719 3.9048L11.2346 1.31703Z"
        fill={color}
      />
    </StyledSvg>
  );
};
