import '@emotion/react';
import {BaseTheme} from "./dist";

export {}

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}
