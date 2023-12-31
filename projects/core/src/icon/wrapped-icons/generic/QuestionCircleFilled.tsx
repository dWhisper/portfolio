import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const QuestionCircleFilled = ({
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10.8924 8.93469C11.1215 8.48154 11.2921 8.26653 11.433 8.1551C11.5389 8.07127 11.6838 8 12 8C12.6249 8 13 8.46979 13 8.97802C13 9.25611 12.9463 9.39367 12.7977 9.56993C12.5908 9.81554 12.2085 10.1153 11.4495 10.6157L11 10.9121V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V11.983C13.5419 11.6089 13.9969 11.2507 14.3272 10.8586C14.8037 10.2931 15 9.68894 15 8.97802C15 7.50823 13.8672 6 12 6C11.3161 6 10.711 6.17599 10.192 6.58666C9.70782 6.96974 9.37844 7.49648 9.10754 8.03234C8.85836 8.52522 9.05592 9.12677 9.5488 9.37595C10.0417 9.62513 10.6432 9.42757 10.8924 8.93469ZM13 16.5C13 15.9477 12.5523 15.5 12 15.5C11.4477 15.5 11 15.9477 11 16.5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V16.5Z"
        fill={color}
      />
    </StyledSvg>
  );
};
