import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  bail: 1,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: ['node_modules', 'packages'],
  setupFiles: ['core-js'],
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/packages/core/src/utils/',
    '<rootDir>/packages/core/src/_docs/',
    '<rootDir>/packages/core/src/date-hooks/',
    '<rootDir>/packages/filters/src/utils/test-helpers.tsx',
    '<rootDir>/packages/data-tables/src/_docs',
    '<rootDir>/packages/data-tables/src/utils/',
    '<rootDir>/packages/filters/src/utils/',
    '<rootDir>/packages/navigation/src/utils/',
    '<rootDir>/packages/schedules/src/utils/',
    '<rootDir>/packages/themes/src/utils/',
    '<rootDir>/packages/smoke-test/src/utils/',
    '<rootDir>/packages/date-pickers/src/utils',
    '<rootDir>/packages/docs',
    // TODO Remove this one once old component is removed
    '<rootDir>/packages/core/src/menu-new-old',
    '<rootDir>/packages/navigation/src/pagination-old',
    '.yarn/__virtual__',
    '/dist/',
  ],
  snapshotSerializers: [
    '@emotion/jest/serializer',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    // TODO: Adjust these pack up after UI testing is fixed up
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '.+\\.(css|styl|less|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
};

export default config;
