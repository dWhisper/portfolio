import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Mastodon = ({
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
        d="M12.158 0C9.08973 0.0250852 6.13831 0.357254 4.41829 1.14718C4.41829 1.14718 1.00706 2.67319 1.00706 7.87953C1.00706 9.07173 0.983848 10.4973 1.02161 12.009C1.14548 17.1005 1.95506 22.1185 6.66254 23.3644C8.83306 23.9389 10.6966 24.0591 12.1974 23.9766C14.9192 23.8257 16.4471 23.0054 16.4471 23.0054L16.3572 21.0307C16.3572 21.0307 14.4123 21.6439 12.2279 21.5691C10.0637 21.4949 7.77911 21.3358 7.42908 18.6787C7.39675 18.4453 7.38059 18.1957 7.38059 17.9336C7.38059 17.9336 9.50502 18.4529 12.1974 18.5763C13.8437 18.6518 15.3876 18.4797 16.9556 18.2926C19.9628 17.9336 22.5811 16.0808 22.9101 14.3878C23.4287 11.7209 23.3859 7.87953 23.3859 7.87953C23.3859 2.67319 19.9749 1.14718 19.9749 1.14718C18.255 0.357254 15.3017 0.0250852 12.2334 0H12.158ZM8.68556 4.06806C9.96362 4.06806 10.9314 4.55935 11.5713 5.54194L12.1934 6.58466L12.8157 5.54194C13.4555 4.55935 14.4232 4.06806 15.7014 4.06806C16.8059 4.06806 17.6959 4.45636 18.3756 5.21383C19.0344 5.9713 19.3623 6.99501 19.3623 8.28341V14.5874H16.8647V8.46888C16.8647 7.17906 16.3222 6.52425 15.2367 6.52425C14.0365 6.52425 13.4349 7.30097 13.4349 8.83659V12.1856H10.952V8.83659C10.952 7.30097 10.3505 6.52425 9.15025 6.52425C8.06474 6.52425 7.52202 7.17906 7.52202 8.46888V14.5874H5.02441V8.28341C5.02441 6.99501 5.35243 5.9713 6.01137 5.21383C6.69087 4.45636 7.58091 4.06806 8.68556 4.06806Z"
        fill={color}
      />
    </StyledSvg>
  );
};