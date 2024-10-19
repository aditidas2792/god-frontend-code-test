
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Ensure the setup file is loaded
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js", // Mock CSS files
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock image files if needed
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  testMatch: ["<rootDir>/_tests_/**/*.test.{js,jsx,ts,tsx}"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};
