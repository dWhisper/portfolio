import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const BackspaceFill = ({
  size,
  pointerEvents,
  color,
  ...rest
}: StyledSvgProps) => {
  const events = pointerEvents ? "auto" : "none";
  return (
    <StyledSvg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      pointerEvents={events}
      fill={"none"}
      height={size}
      width={size}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.6 4.2C7.16656 3.44458 8.05573 3 9 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H9C8.05573 21 7.16656 20.5554 6.6 19.8L2.1 13.8C1.3 12.7333 1.3 11.2667 2.1 10.2L6.6 4.2ZM17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289C17.3166 7.90237 16.6834 7.90237 16.2929 8.29289L14 10.5858L11.7071 8.29291C11.3166 7.90238 10.6834 7.90238 10.2929 8.29291C9.90237 8.68343 9.90237 9.3166 10.2929 9.70712L12.5858 12L10.2929 14.2929C9.90238 14.6834 9.90238 15.3166 10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071L14 13.4142L16.2929 15.7071C16.6834 16.0976 17.3166 16.0976 17.7071 15.7071C18.0976 15.3166 18.0976 14.6834 17.7071 14.2929L15.4142 12L17.7071 9.70711Z"
        fill={color}
      />
    </StyledSvg>
  );
};
