const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: '../tests/level-2/*_test.js',
  output: '../../output',
  helpers: {
    WebDriver: {
      url: 'http://localhost:3000',
      browser: 'chrome'
    }
  },
  include: {
    I: '../../steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'react-web-example',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}