module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ["./src/setupTest.ts"],
  testRegex: ["(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)"],
};