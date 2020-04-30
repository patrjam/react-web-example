# React web example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
This project was created as simple frontend app for test automation training. 

## Live Demo
https://patrjam.github.io/react-web-example/

## Installation
```
git clone https://github.com/patrjam/react-web-example.git
cd react-web-example
npm i
npm start
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run deploy`

For deploy on page `https://patrjam.github.io/react-web-example/`

## CodeceptJS automation tests
All tests demonstrate fill in mandatory fields in app.
The whole test automation part is possible to find in `root/codeceptjs-automation-example` folder,
which contains sub folders:
- configs
- pages
- tests

### Example levels
- 1.level - codeceptjs basics
- 2.level - page objects and methods
- 3.level - use private jsqa package, custom locators, autoloading

Note: 1. & 2.level is possible run always.

For 3.level is needed to:
- rename `.env.dist` file to `.env` and set variables in `.env` file (ENV_NAME, SITE)
- add `.npmrc` file with artifactory link
- replace `"foo/Foo"` placeholder


### Run tests with codeceptjs
Before run tests, always run selenium-server on your machine, with command e.g. `selenium-server -port 4444`

level 1 tests:
`npm run test:level1`

level 2 tests:
`npm run test:level2`

level 3 tests:
`npm run test:level3`