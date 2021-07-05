module.exports = {
  verbose: true,
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["./src/setupTest.ts"],
  testRegex: ["(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)"],
  moduleNameWrapper : {
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@stores/(.*)": "<rootDir>/src/stores/$1",
    "@hooks/(.*)": "<rootDir>/src/hooks/$1",
    "@atoms/(.*)": "<rootDir>/src/components/atoms/$1",
    "@molecules/(.*)": "<rootDir>/src/components/molecules/$1",
    "@organisms/(.*)": "<rootDir>/src/components/organisms/$1",
    "@pages/(.*)": "<rootDir>/src/components/pages/$1"
  }
};