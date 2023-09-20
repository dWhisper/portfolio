import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const ChatEdit = ({
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
        d="M14 19C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11C2 14.7712 2 16.6569 3.17157 17.8284C3.82475 18.4816 4.69989 18.7706 6 18.8985"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2071 6.79289C15.019 6.60475 14.7636 6.49934 14.4975 6.5C14.2314 6.50067 13.9766 6.60734 13.7894 6.79642L9.23859 11.3927C8.96317 11.6709 8.77544 12.0238 8.69867 12.4077L8.51942 13.3039C8.45385 13.6317 8.55647 13.9707 8.79289 14.2071C9.02931 14.4435 9.36824 14.5462 9.6961 14.4806L10.5923 14.3013C10.9762 14.2246 11.3291 14.0368 11.6073 13.7614L16.2036 9.21061C16.3927 9.02341 16.4993 8.76856 16.5 8.50249C16.5007 8.23641 16.3953 7.98104 16.2071 7.79289L15.2071 6.79289Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.5 9.5L13.5 10.5" stroke={color} strokeWidth="2" />
      <path
        d="M14 19C12.7635 19 11.4022 19.4992 10.1586 20.145C8.16119 21.1821 7.16249 21.7007 6.67035 21.3703C6.1782 21.0398 6.27135 20.0151 6.45766 17.9657L6.5 17.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};
