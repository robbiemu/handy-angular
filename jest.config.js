module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/projects/**/src/app/core/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ["<rootDir>/projects/**/src/**/*.(spec|test).ts"]
};
