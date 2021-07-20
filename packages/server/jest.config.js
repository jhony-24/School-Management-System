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
    "@interfaces/(.*)": "<rootDir>/src/app/interfaces/$1",
    "@services/(.*)": "<rootDir>/src/app/services/$1",
    "@models/(.*)": "<rootDir>/src/app/models/$1",
    "@utils/(.*)": "<rootDir>/src/app/utils/$1",
    "@localtypes/(.*)": "<rootDir>/src/app/types/$1",
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@api": "<rootDir>/src/api/index.ts",
    "@keys/(.*)" : "<rootDir>/src/keys/$1"
  },
};