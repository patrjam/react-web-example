const { setHeadlessWhen } = require('@codeceptjs/configure');


// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: '../tests/level-1/*_test.js',
  output: '../../output',
  helpers: {
    WebDriver: {
      url: 'http://localhost:3000',
      browser: 'chrome'
    }
  },
  include: {},
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