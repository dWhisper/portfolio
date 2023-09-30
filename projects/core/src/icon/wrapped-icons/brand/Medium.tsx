import React from "react";
import { StyledSvg } from "../../Icon.styled";
import { StyledSvgProps } from "../../Icon.types";

export const Medium = ({
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
        d="M4.37162 7.26396C4.39646 7.01656 4.30284 6.77204 4.11951 6.60553L2.2521 4.33862V4H8.05042L12.5322 13.9048L16.4725 4H22V4.33862L20.4034 5.88125C20.2657 5.98698 20.1974 6.16075 20.226 6.33275V17.6673C20.1974 17.8392 20.2657 18.013 20.4034 18.1188L21.9627 19.6614V20H14.1195V19.6614L15.7348 18.0811C15.8936 17.9212 15.8936 17.8742 15.8936 17.6296V8.46796L11.4024 19.9624H10.7955L5.56676 8.46796V16.1717C5.52316 16.4955 5.62991 16.8216 5.85621 17.0559L7.95705 19.6238V19.9624H2V19.6238L4.10084 17.0559C4.32549 16.8212 4.42601 16.493 4.37162 16.1717V7.26396Z"
        fill={color}
      />
    </StyledSvg>
  );
};
