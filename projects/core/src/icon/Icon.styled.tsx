import styled from "@emotion/styled";
import { IconStyledProps } from "./Icon.types";

const DEFAULT_COLOR = "black";

export const StyledSvg = styled.svg<IconStyledProps>`
  ${({ color = DEFAULT_COLOR }) => {
    return `
      // fill: ${color};
    `;
  }}
`;
