import React from "react";
import { StyledSvg } from "../Icon.styled";
import { StyledSvgProps } from "../Icon.types";

export const AndroidFill = ({
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
      <path d="M17.5324 15.106C16.9787 15.106 16.5294 14.6567 16.5294 14.1029C16.5294 13.5492 16.9787 13.0999 17.5324 13.0999C18.0862 13.0999 18.5355 13.5492 18.5355 14.1029C18.5355 14.6567 18.0862 15.106 17.5324 15.106ZM6.48846 15.106C5.9347 15.106 5.48542 14.6567 5.48542 14.1029C5.48542 13.5492 5.9347 13.0999 6.48846 13.0999C7.04223 13.0999 7.49151 13.5492 7.49151 14.1029C7.49151 14.6567 7.04223 15.106 6.48846 15.106ZM17.8877 9.08771L19.8938 5.62928C20.0087 5.43076 19.9356 5.18 19.737 5.06507C19.5385 4.95013 19.2878 5.02327 19.1728 5.22179L17.1458 8.72201C15.5995 8.01152 13.865 7.61448 12.0157 7.61448C10.1663 7.61448 8.42142 8.01152 6.87505 8.71156L4.84806 5.21134C4.73313 5.01282 4.48237 4.93969 4.28385 5.05462C4.08533 5.16955 4.01219 5.42031 4.12712 5.61883L6.12277 9.07726C2.69569 10.9475 0.344798 14.4164 0 18.5226H24C23.6657 14.4268 21.3252 10.958 17.8877 9.08771Z" />
    </StyledSvg>
  );
};
