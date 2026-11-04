const { defineConfig } = require('cypress');

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  video: true,

  e2e: {
    baseUrl: 'http://localhost:3000'
  }
});