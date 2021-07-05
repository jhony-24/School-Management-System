module.exports = {
  verbose: true,
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'node',
  setupFilesAfterEnv: ["./src/setupTest.ts"],
  testRegex: ["(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)"],
  collectCoverage: true,
  moduleNameMapper: {
    "@controllers/(.*)": "<rootDir>/src/api/controllers/$1",
    "@middlewares/(.*)": "<rootDir>/src/api/middlewares/$1",
    "@routes/(.*)": "<rootDir>/src/api/routes/$1",
    "@interfaces/(.*)": "<rootDir>/src/interfaces/$1",
    "@services/(.*)": "<rootDir>/src/services/$1",
    "@types/(.*)": "<rootDir>/src/types/$1",
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@api": "<rootDir>/src/api/index.ts",
  },
};