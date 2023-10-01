import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Phone = ({
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
        d="M10.5543 6.23925L7.17139 2.33587C6.7811 1.88554 6.06647 1.88845 5.61329 2.34223L2.83134 5.12787C2.00339 5.95692 1.7664 7.1882 2.24482 8.17518C5.1264 14.1199 9.86965 18.8695 15.8065 21.7549C16.7922 22.2339 18.0219 21.9966 18.8498 21.1676L21.6582 18.3554C22.1132 17.8999 22.114 17.181 21.6602 16.7914L17.7396 13.4264C17.3293 13.0742 16.6927 13.1204 16.2815 13.5322L14.9177 14.8978C14.766 15.0497 14.538 15.086 14.3646 14.986C12.1314 13.6984 10.2906 11.8552 9.00467 9.61904C8.90481 9.44539 8.94113 9.21706 9.09277 9.06522L10.4524 7.70377C10.8654 7.29024 10.91 6.64965 10.5543 6.23925Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
