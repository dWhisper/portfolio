import React, { FC } from "react";
import { GlobalStyleProps } from "./GlobalStyleProps.types";
import { Global, css } from "@emotion/react";
import { ColorVarsMixin, TypographyMixin, NormalizeMixin } from "./mixins";

export const GlobalStyles: FC<GlobalStyleProps> = ({ ...rest }) => {
  const styles = css`
    ${NormalizeMixin}
    ${TypographyMixin}
    :root {
      ${ColorVarsMixin}
    }
  `;
  return <Global {...rest} styles={styles} />;
};
