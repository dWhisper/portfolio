import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const YarnFill = ({
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
      height={size}
      width={size}
      fill={color}
      {...rest}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.9941 11.6746C23.8252 5.23008 18.5615 0.0128817 12.0039 3.23892e-06C5.21091 -0.00494824 -0.299833 5.6679 0.0126667 12.5562C0.29294 18.7718 5.35739 23.8523 11.7236 23.997C18.5332 24.1544 24.1718 18.5965 23.9941 11.6746ZM7.91989 7.52519C7.77536 7.80551 7.66208 8.0997 7.58396 8.4038C7.55857 8.42163 7.56345 8.45333 7.55173 8.4771C7.55173 8.52663 7.55173 8.57615 7.53806 8.6237V8.95157C7.55466 9.0011 7.54978 9.05162 7.55466 9.10115C7.58396 9.16652 7.5361 9.24774 7.60935 9.30024C7.69724 9.59939 7.79587 9.89358 7.95603 10.161C8.00583 10.2452 7.99802 10.2898 7.92478 10.3552C7.54392 10.7038 7.20212 11.0892 6.93845 11.5379C6.46579 12.3402 6.29001 13.2169 6.29001 14.1371C6.29001 14.1759 6.28513 14.2101 6.27439 14.2419C6.26267 14.2791 6.24314 14.3129 6.21189 14.3471C5.60349 15.0137 5.27634 15.7744 5.42575 16.6947C5.50192 17.1622 5.63767 17.605 5.91599 17.9933C5.97946 18.0794 6.00974 18.1577 6.00485 18.2657C5.98728 18.6698 6.14939 18.9977 6.49314 19.2047C7.07321 19.5563 7.70017 19.6821 8.36814 19.5326C8.41208 19.5221 8.457 19.5014 8.50095 19.481C8.56931 19.4491 8.63767 19.4179 8.69919 19.4276C8.76657 19.4389 8.82712 19.4907 8.88767 19.5433C8.92282 19.5733 8.95798 19.6036 8.99509 19.6267C9.37595 19.8545 9.80368 19.9129 10.2334 19.8941C11.2773 19.8495 12.3183 19.7871 13.3545 19.6425C13.6963 19.595 14.0244 19.5088 14.3047 19.2988C14.3652 19.2513 14.4316 19.2225 14.5019 19.1988C15.5508 18.8531 16.5537 18.4014 17.4687 17.7932C18.0244 17.4287 18.6064 17.1315 19.2627 16.9849C19.622 16.9066 19.8838 16.6699 20.0439 16.3371C20.4511 15.4931 19.8261 14.5462 18.8535 14.5382C18.1953 14.5333 17.5898 14.7373 17.0097 15.0286C16.7978 15.1351 16.5967 15.2575 16.3955 15.38C16.205 15.4955 16.0146 15.6111 15.8164 15.713L15.7871 15.7301C15.7461 15.7539 15.7041 15.7788 15.6513 15.7764V15.6764C15.7031 14.2807 15.25 13.0693 14.3232 12.0302C14.2666 11.9678 14.2773 11.9282 14.3183 11.8677C14.664 11.3695 14.9472 10.8395 15.1494 10.268C15.4931 9.29529 15.5615 8.29583 15.457 7.28052C15.4072 6.79219 15.3076 6.31474 15.1006 5.86404C14.9218 5.47872 14.5859 5.29745 14.1718 5.38958C14.0595 5.41335 14.0224 5.37966 13.9775 5.28755C13.8408 5.00425 13.6992 4.72293 13.5088 4.47134C13.3379 4.24549 13.1045 4.12762 12.8242 4.11177C12.3799 4.08602 12.0732 4.32672 11.8164 4.64964C11.622 4.89331 11.4756 5.16868 11.3584 5.45495C11.3222 5.5423 11.2783 5.59136 11.208 5.61669C11.1816 5.62641 11.1504 5.63265 11.1142 5.63622C10.33 5.72338 9.65524 6.04828 9.09958 6.60695C8.94235 6.76643 8.76657 6.88728 8.55661 6.95562C8.26364 7.0527 8.06149 7.25477 7.91989 7.52519Z"
        />
        <path d="M14.9468 15.8132C14.9468 16.0549 14.8913 16.2907 14.8606 16.5264C14.8349 16.7334 14.8557 16.7572 15.0657 16.7206C15.5382 16.6393 15.9651 16.4402 16.3772 16.2065C16.818 15.9549 17.238 15.6686 17.7095 15.4804C18.074 15.3338 18.4464 15.2367 18.8426 15.2367C19.1864 15.2367 19.4251 15.4229 19.4667 15.7171C19.5063 15.9895 19.3567 16.25 19.0834 16.3075C18.3018 16.4729 17.6272 16.8582 16.9695 17.2862C16.0879 17.8557 15.1281 18.2668 14.1286 18.5818C14.092 18.5927 14.0444 18.6006 14.0207 18.6234C13.7849 18.873 13.4729 18.9146 13.1579 18.9562C12.2743 19.0721 11.3848 19.1237 10.4933 19.1762C10.2368 19.192 9.97922 19.1999 9.72267 19.1504C9.31357 19.0692 9.14022 18.9166 9.07782 18.5808C9.02235 18.2787 9.164 17.9934 9.46611 17.7963C9.49781 17.7755 9.53149 17.7547 9.58201 17.723C9.41956 17.623 9.28584 17.5051 9.18381 17.3585C9.13428 17.2901 9.10754 17.3327 9.09169 17.3902C9.04216 17.5794 8.99164 17.7706 8.94211 17.9597C8.90843 18.0856 8.86584 18.2094 8.81334 18.3292C8.6608 18.6779 8.38344 18.8463 8.01595 18.88C7.64053 18.9137 7.28691 18.8304 6.95111 18.665C6.72031 18.5521 6.65197 18.3817 6.72824 18.1321C6.76786 17.9984 6.84413 17.8825 6.93526 17.7408C6.61829 17.8042 6.47862 17.62 6.36867 17.3971C6.12202 16.9088 6.03783 16.3927 6.13787 15.8578C6.2191 15.4328 6.46871 15.0871 6.76786 14.788C6.94319 14.6127 6.99569 14.4443 6.99073 14.1976C6.95111 12.7732 7.48898 11.6033 8.59641 10.699C8.69349 10.6177 8.79056 10.5335 8.89259 10.4602C8.95598 10.4157 8.96292 10.3869 8.91141 10.3216C8.62514 9.96199 8.40227 9.57171 8.30024 9.11804C8.18434 8.60691 8.35769 8.16314 8.61523 7.73819C8.65188 7.68074 8.70934 7.65201 8.77273 7.62824C9.09565 7.51235 9.36805 7.33702 9.6147 7.09037C10.1704 6.53467 10.8578 6.28009 11.6443 6.31377C11.7444 6.31873 11.789 6.29 11.8197 6.1959C11.9375 5.85217 12.0841 5.52133 12.2813 5.21524C12.3546 5.09935 12.4358 4.99237 12.5408 4.90619C12.7349 4.74572 12.9003 4.76949 13.0311 4.98246C13.2728 5.36779 13.459 5.78283 13.6472 6.19689C13.6948 6.30189 13.7314 6.33854 13.8414 6.26722C13.9701 6.18599 14.1138 6.12854 14.2584 6.07802C14.3743 6.0384 14.4416 6.06514 14.4922 6.18599C14.6388 6.53962 14.718 6.91009 14.7626 7.29046C14.7755 7.39546 14.7992 7.49749 14.7864 7.60249C14.7784 7.83031 14.7893 8.05913 14.7913 8.28993C14.7913 8.39196 14.7547 8.49498 14.7864 8.59899C14.7626 9.22304 14.5972 9.81341 14.3565 10.385C14.1306 10.9199 13.8027 11.3943 13.4749 11.8698C13.3461 12.0531 13.3491 12.056 13.5165 12.2056C14.3347 12.9426 14.7864 13.8687 14.9379 14.9494C14.9429 14.991 14.9409 15.0356 14.9409 15.0802C14.9072 15.1802 14.9438 15.2773 14.9458 15.3744C14.9547 15.522 14.9211 15.6696 14.9468 15.8132Z" />
      </g>
    </StyledSvg>
  );
};
