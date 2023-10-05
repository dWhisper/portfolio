import { css, Global } from "@emotion/react";
import React, { FC } from "react";
import { GlobalStyleProps } from "./GlobalStyleProps.types";
import {
  ColorVarsMixin,
  LayoutMixin,
  NormalizeMixin,
  TypographyMixin,
} from "./mixins";

export const GlobalStyles: FC<GlobalStyleProps> = ({ ...rest }) => {
  const styles = css`
    ${LayoutMixin}
    ${NormalizeMixin}
    ${TypographyMixin}
    :root {
      ${ColorVarsMixin}
    }
  `;
  return <Global {...rest} styles={styles} />;
};
