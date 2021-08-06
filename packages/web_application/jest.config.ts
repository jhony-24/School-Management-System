export default {
  clearMocks: true,
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '@components': '<rootDir>/src/components/$1',
    '@assets': '<rootDir>/src/assets/$1',
    '@config': '<rootDir>/src/config/$1',
    '@atoms': '<rootDir>/src/components/atoms/$1',
    '@molecules': '<rootDir>/src/components/molecules/$1',
    '@organisms': '<rootDir>/src/components/organisms/$1',
    '@webscreen': '<rootDir>/src/screens/web/$1',
    '@nativescreen': '<rootDir>/src/screens/native/$1',
    '@services': '<rootDir>/src/core/services/$1',
    '@utils': '<rootDir>/src/core/utils/$1',
  },
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
};
