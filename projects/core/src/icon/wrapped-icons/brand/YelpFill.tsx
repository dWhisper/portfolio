import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const YelpFill = ({ size, pointerEvents, ...rest }: StyledSvgProps) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.9793 11.2641L9.6815 13.5419C9.88033 13.6382 10.0445 13.7929 10.1518 13.985C10.2591 14.1772 10.3042 14.3975 10.2811 14.616C10.2581 14.8345 10.1678 15.0407 10.0227 15.2065C9.87765 15.3723 9.6847 15.4898 9.47008 15.543L4.39407 16.8002C4.24487 16.8369 4.0895 16.8416 3.93835 16.8139C3.7872 16.7862 3.64373 16.7268 3.51755 16.6396C3.39137 16.5524 3.28537 16.4395 3.20664 16.3084C3.12791 16.1772 3.07826 16.0309 3.06101 15.8792C2.90474 14.5323 3.04957 13.1676 3.48516 11.8827C3.53429 11.7386 3.61377 11.6065 3.71831 11.4953C3.82285 11.3841 3.95005 11.2963 4.09143 11.2378C4.23281 11.1793 4.38512 11.1514 4.53822 11.1559C4.69132 11.1604 4.84169 11.1973 4.9793 11.2641Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.86195 20.879L10.3618 17.0176C10.5098 16.8544 10.7048 16.7403 10.9203 16.6909C11.1359 16.6414 11.3615 16.6591 11.5666 16.7414C11.7717 16.8237 11.9463 16.9666 12.0668 17.1509C12.1873 17.3352 12.2478 17.5518 12.2401 17.7714L12.0575 22.9659C12.052 23.1185 12.0139 23.2681 11.9455 23.4048C11.8772 23.5415 11.7802 23.6621 11.6612 23.7586C11.5421 23.8551 11.4037 23.9252 11.2552 23.9643C11.1067 24.0033 10.9514 24.0105 10.7999 23.9852C9.45507 23.76 8.17597 23.2458 7.05203 22.4785C6.92558 22.3921 6.81916 22.2799 6.73987 22.1493C6.66059 22.0188 6.61027 21.8729 6.59227 21.7215C6.57428 21.5701 6.58903 21.4166 6.63554 21.2713C6.68204 21.1261 6.75923 20.9923 6.86195 20.879Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1602 15.7406L20.1348 17.3464C20.2808 17.3935 20.415 17.471 20.5284 17.5737C20.6418 17.6765 20.7318 17.802 20.7924 17.9421C20.8531 18.0821 20.8829 18.2334 20.88 18.3858C20.8771 18.5382 20.8414 18.6882 20.7755 18.8259C20.1883 20.0486 19.3394 21.1293 18.288 21.9922C18.1696 22.0894 18.0315 22.1603 17.8832 22.2003C17.7349 22.2402 17.5797 22.2482 17.4281 22.2238C17.2764 22.1994 17.1317 22.143 17.0037 22.0586C16.8757 21.9741 16.7674 21.8635 16.6859 21.7341L13.9129 17.3262C13.7957 17.1399 13.7391 16.9223 13.7507 16.7028C13.7623 16.4834 13.8415 16.2728 13.9777 16.0997C14.1139 15.9266 14.3004 15.7992 14.512 15.735C14.7235 15.6708 14.9498 15.6727 15.1602 15.7406Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.219 12.5884L15.1904 14.0205C14.9778 14.081 14.7516 14.0751 14.5424 14.0036C14.3333 13.932 14.1514 13.7983 14.0214 13.6205C13.8914 13.4428 13.8196 13.2296 13.8158 13.0099C13.8119 12.7902 13.8762 12.5747 13.9999 12.3926L16.9256 8.08469C17.0111 7.95858 17.1228 7.85202 17.253 7.7721C17.3833 7.69219 17.5292 7.64075 17.681 7.62123C17.8328 7.6017 17.9871 7.61452 18.1336 7.65885C18.28 7.70317 18.4153 7.77798 18.5304 7.87829C19.5545 8.77461 20.367 9.88433 20.9099 11.1283C20.9713 11.2683 21.002 11.4197 20.9999 11.5724C20.9977 11.7251 20.9628 11.8756 20.8974 12.0138C20.832 12.152 20.7377 12.2748 20.6207 12.3738C20.5037 12.4729 20.3667 12.5461 20.219 12.5884Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.46885 0.468162C7.5799 0.704337 6.71462 1.02097 5.88388 1.41408C5.7499 1.47783 5.63064 1.56843 5.5336 1.68016C5.43656 1.7919 5.36384 1.92237 5.32001 2.06337C5.27618 2.20436 5.26218 2.35284 5.27889 2.49947C5.29561 2.6461 5.34268 2.78771 5.41714 2.9154L10.3321 11.3712C10.4507 11.5753 10.6339 11.7348 10.8531 11.825C11.0723 11.9152 11.3153 11.931 11.5445 11.87C11.7737 11.809 11.9762 11.6746 12.1207 11.4877C12.2651 11.3007 12.3435 11.0716 12.3435 10.8359V1.07157C12.3437 0.924007 12.3132 0.777992 12.2539 0.642703C12.1945 0.507415 12.1077 0.385779 11.9987 0.285438C11.8898 0.185098 11.7612 0.108222 11.6209 0.0596433C11.4806 0.0110643 11.3317 -0.00816814 11.1836 0.0031546C10.2663 0.0754431 9.35756 0.231097 8.46885 0.468162Z"
      />
    </StyledSvg>
  );
};
