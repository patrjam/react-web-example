require('dotenv').config()
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: '../tests/level-3/*_test.js',
  output: '../../output',
  helpers: {
    WebDriver: {
      url: 'http://localhost:3000',
      browser: 'chrome'
    },
    DataClientHelper: {
        require: 'jsqa/helpers/dataClientHelper.js'
      },
      WebDriverHelper: {
        require: 'jsqa/helpers/webDriverHelper.js'
      },
      RESTClientHelper: {
        require: 'jsqa/helpers/RESTClientHelper.js',
        defaultHeaders: {
          'Content-Type': 'application/json'
        }
      },
      AssertWrapper: {
        require: 'codeceptjs-assert'
      }
  },
  include: {
    I: 'jsqa/steps_file.js'
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
    },
    customLocator: {
        enabled: true,
        prefix: '$',
        attribute: 'data-qa'
      }
  }
}