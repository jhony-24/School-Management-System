module.exports = {
  verbose: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ["./src/setupTest.ts"],
  testRegex: ["(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)"],
};