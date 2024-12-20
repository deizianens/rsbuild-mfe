export default {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', 'dist', '/__mocks__/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    'styled-components/macro': 'styled-components',
  },
  transform: { '^.+\\.[t|j]sx?$': 'babel-jest' },
}
