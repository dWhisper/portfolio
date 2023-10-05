import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Ticket = ({
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
        d="M8.70711 3.29289C8.31658 3.68342 8.33834 4.31421 8.56945 4.81582C9.05089 5.86077 8.86108 7.13892 8 8C7.13892 8.86108 5.86077 9.05089 4.81582 8.56945C4.31421 8.33834 3.68342 8.31658 3.29289 8.70711L2.70711 9.29289C2.31658 9.68342 2.31658 10.3166 2.70711 10.7071L13.2929 21.2929C13.6834 21.6834 14.3166 21.6834 14.7071 21.2929L15.2929 20.7071C15.6834 20.3166 15.6617 19.6858 15.4306 19.1842C14.9491 18.1392 15.1389 16.8611 16 16C16.8611 15.1389 18.1392 14.9491 19.1842 15.4306C19.6858 15.6617 20.3166 15.6834 20.7071 15.2929L21.2929 14.7071C21.6834 14.3166 21.6834 13.6834 21.2929 13.2929L10.7071 2.70711C10.3166 2.31658 9.68342 2.31658 9.29289 2.70711L8.70711 3.29289Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};
