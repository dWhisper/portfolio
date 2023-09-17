// This only exists to fix issues with code detection in WebStorm
// tslint:disable:no-namespace
declare namespace jest {
  interface Matchers<R> {
    toHaveStyle(css: string | Record<string, unknown>): R;
  }
}
