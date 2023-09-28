import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const GraphQL = ({
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
        d="M11.3838 4.18734C11.579 4.24621 11.786 4.27783 12.0005 4.27783C12.1925 4.27783 12.3784 4.2525 12.5553 4.20498L18.8807 15.3872C18.7395 15.5236 18.6149 15.682 18.5124 15.8611C18.4089 16.0419 18.3345 16.2317 18.2879 16.4249H5.71123C5.66452 16.2318 5.59005 16.042 5.48636 15.8611C5.37212 15.6638 5.23153 15.4915 5.07169 15.3462L11.3838 4.18734ZM10.4626 3.62197C10.4814 3.64155 10.5006 3.66078 10.5201 3.67964L4.19281 14.8652C4.16319 14.8572 4.1334 14.8498 4.10346 14.8431V9.15607C4.66412 9.02911 5.17203 8.67728 5.4805 8.13892C5.78692 7.60414 5.83818 6.9924 5.67173 6.44531L10.4626 3.62197ZM14.0339 2.78653C14.0983 2.58231 14.1331 2.36474 14.1331 2.13892C14.1331 0.956077 13.1798 0 12.0005 0C10.8211 0 9.8679 0.956077 9.8679 2.13892C9.8679 2.35004 9.89826 2.55394 9.95487 2.74646L5.15751 5.57362C5.02462 5.4371 4.87122 5.31614 4.69858 5.21553C3.67841 4.62718 2.37112 4.97651 1.78467 6.00001C1.19823 7.0235 1.54643 8.33504 2.5666 8.92339C2.74 9.02339 2.92169 9.0963 3.10672 9.14342V14.858C2.92382 14.9051 2.74416 14.9776 2.57246 15.0766C1.55229 15.6711 1.20409 16.9765 1.79053 18C2.37698 19.0235 3.67816 19.3728 4.70444 18.7845C4.87525 18.6849 5.02723 18.5655 5.15914 18.4307L9.95402 21.2564C9.89796 21.4481 9.8679 21.651 9.8679 21.8611C9.8679 23.0439 10.8211 24 12.0005 24C13.1798 24 14.1331 23.0378 14.1331 21.8611C14.1331 21.6124 14.0909 21.3738 14.0134 21.1519L18.7642 18.3522C18.9124 18.5199 19.0895 18.6667 19.2936 18.7845C20.3128 19.3728 21.6188 19.0235 22.2047 18C22.7967 16.9765 22.4489 15.6711 21.4236 15.0766C21.2303 14.9651 21.0268 14.8872 20.8198 14.8413V9.16075C21.0302 9.11509 21.2371 9.0366 21.4334 8.92339C22.4536 8.32891 22.8018 7.0235 22.2153 6.00001C21.6228 4.97651 20.3216 4.62718 19.3014 5.21553C19.1163 5.32342 18.9533 5.45472 18.814 5.60349L14.0339 2.78653ZM13.434 3.72368C13.4596 3.70038 13.4846 3.67646 13.509 3.65195L18.3166 6.48511C18.1645 7.02193 18.2205 7.61707 18.5195 8.13892C18.8144 8.65365 19.2917 8.99788 19.8231 9.13806V14.8598C19.7971 14.8665 19.7712 14.8738 19.7455 14.8815L13.434 3.72368ZM18.3292 17.5824L13.5552 20.3958C13.1664 19.981 12.6141 19.7222 12.0005 19.7222C11.3947 19.7222 10.8485 19.9745 10.4606 20.3802L5.67582 17.5605C5.68783 17.5214 5.69873 17.482 5.7085 17.4423H18.2899C18.3015 17.4894 18.3146 17.5362 18.3292 17.5824Z"
        fill={color}
      />
    </StyledSvg>
  );
};
