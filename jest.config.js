module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  collectCoverageFrom: [
    "components/**/*.{ts,tsx}",
    "!components/**/*.stories.{ts,tsx}",
    "!components/**/index.{ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
