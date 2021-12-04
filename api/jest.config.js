/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './tests/coverage',
  coverageProvider: 'v8',
  setupFiles: ['dotenv/config'],
};
