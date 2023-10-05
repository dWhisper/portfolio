import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Reddit = ({
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
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM19.688 11.0584C19.882 11.3352 19.9918 11.6622 20.0041 12C20.0092 12.3306 19.9207 12.656 19.7486 12.9384C19.5766 13.2208 19.3282 13.4488 19.0321 13.596C19.0456 13.7717 19.0456 13.9483 19.0321 14.124C19.0321 16.812 15.9001 18.996 12.0361 18.996C8.1721 18.996 5.0401 16.812 5.0401 14.124C5.02659 13.9483 5.02659 13.7717 5.0401 13.596C4.80929 13.49 4.6043 13.335 4.43933 13.1418C4.27437 12.9487 4.15337 12.722 4.08472 12.4775C4.01608 12.2329 4.00143 11.9764 4.04179 11.7256C4.08215 11.4748 4.17656 11.2358 4.31847 11.0251C4.46038 10.8145 4.6464 10.6372 4.86364 10.5056C5.08088 10.3739 5.32414 10.2911 5.57657 10.2629C5.82899 10.2346 6.08454 10.2616 6.32551 10.3419C6.56649 10.4222 6.78711 10.5539 6.9721 10.728C8.35483 9.79022 9.98156 9.27718 11.6521 9.25199L12.5401 5.08799C12.5501 5.03979 12.5695 4.99404 12.5973 4.9534C12.6251 4.91277 12.6607 4.87805 12.7019 4.85126C12.7432 4.82447 12.7895 4.80614 12.8379 4.79734C12.8863 4.78854 12.936 4.78944 12.9841 4.79999L15.9241 5.38799C16.0677 5.14132 16.2945 4.95389 16.5638 4.85937C16.8331 4.76484 17.1273 4.76939 17.3935 4.87222C17.6598 4.97504 17.8807 5.1694 18.0165 5.4204C18.1524 5.6714 18.1944 5.96261 18.1349 6.24176C18.0754 6.52091 17.9183 6.76971 17.6919 6.94351C17.4655 7.11731 17.1846 7.20472 16.8996 7.19005C16.6145 7.17539 16.344 7.05961 16.1367 6.86349C15.9293 6.66738 15.7986 6.40377 15.7681 6.11999L13.2001 5.57999L12.4201 9.32399C14.0703 9.35939 15.675 9.87205 17.0401 10.8C17.284 10.5659 17.5903 10.4074 17.9222 10.3436C18.2541 10.2797 18.5974 10.3132 18.9107 10.44C19.224 10.5669 19.494 10.7816 19.688 11.0584ZM8.20634 12.5333C8.07448 12.7306 8.0041 12.9627 8.0041 13.2C8.0041 13.3576 8.03514 13.5136 8.09545 13.6592C8.15575 13.8048 8.24414 13.9371 8.35557 14.0485C8.467 14.16 8.59929 14.2483 8.74488 14.3086C8.89047 14.369 9.04652 14.4 9.2041 14.4C9.44144 14.4 9.67345 14.3296 9.87079 14.1978C10.0681 14.0659 10.2219 13.8785 10.3128 13.6592C10.4036 13.4399 10.4273 13.1987 10.381 12.9659C10.3347 12.7331 10.2205 12.5193 10.0526 12.3515C9.88481 12.1836 9.67099 12.0694 9.43821 12.0231C9.20543 11.9767 8.96415 12.0005 8.74488 12.0913C8.52561 12.1822 8.3382 12.336 8.20634 12.5333ZM12.0121 17.424C13.0772 17.4681 14.1247 17.1896 14.9761 16.548C15.0076 16.5173 15.0328 16.4806 15.0501 16.4402C15.0675 16.3997 15.0767 16.3563 15.0773 16.3122C15.0778 16.2682 15.0697 16.2245 15.0534 16.1837C15.0371 16.1428 15.0128 16.1055 14.9821 16.074C14.9514 16.0425 14.9147 16.0173 14.8743 16C14.8338 15.9826 14.7904 15.9734 14.7463 15.9728C14.6575 15.9717 14.5718 16.0059 14.5081 16.068C13.7798 16.5904 12.8951 16.8487 12.0001 16.8C11.1062 16.8399 10.2256 16.5732 9.5041 16.044C9.44193 15.993 9.36299 15.9669 9.28266 15.9708C9.20232 15.9748 9.12632 16.0085 9.06945 16.0653C9.01257 16.1222 8.97889 16.1982 8.97494 16.2785C8.971 16.3589 8.99707 16.4378 9.0481 16.5C9.89947 17.1416 10.947 17.4681 12.0121 17.424ZM14.0934 14.2458C14.2908 14.3776 14.5108 14.496 14.7481 14.496C14.9108 14.4978 15.0722 14.4664 15.2224 14.4038C15.3726 14.3413 15.5086 14.2488 15.6219 14.1321C15.7353 14.0153 15.8237 13.8768 15.8819 13.7248C15.94 13.5728 15.9666 13.4106 15.9601 13.248C15.9601 13.0107 15.8897 12.7786 15.7579 12.5813C15.626 12.384 15.4386 12.2302 15.2193 12.1393C15 12.0485 14.7588 12.0247 14.526 12.0711C14.2932 12.1174 14.0794 12.2316 13.9116 12.3995C13.7438 12.5673 13.6295 12.7811 13.5832 13.0139C13.5369 13.2467 13.5606 13.4879 13.6514 13.7072C13.7423 13.9265 13.8961 14.1139 14.0934 14.2458Z"
        fill={color}
      />
    </StyledSvg>
  );
};
