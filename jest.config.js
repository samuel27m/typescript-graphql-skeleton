/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: process.cwd(),
  coverageDirectory: '<rootDir>/build/.jestcoverage',
  cacheDirectory: '<rootDir>/build/.jestcache',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html'],
  collectCoverageFrom: [
      '<rootDir>/src/**/*.{ts,js}'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testMatch: ["<rootDir>/tests/**/*.spec.ts", "<rootDir>/tests/**/*.test.ts"],
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  clearMocks: true
};
