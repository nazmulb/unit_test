# Unit Testing Framework

[![CircleCI Build Status](https://badgen.net/circleci/github/nazmulb/unit_test)](https://circleci.com/gh/nazmulb/unit_test)
[![GitHub Last commit](https://badgen.net/github/last-commit/nazmulb/unit_test)](https://github.com/nazmulb/unit_test)
[![GitHub commits](https://badgen.net/github/commits/nazmulb/unit_test)](https://github.com/nazmulb/unit_test/commits/master)
[![GitHub stars](https://badgen.net/github/stars/nazmulb/unit_test)](https://github.com/nazmulb/unit_test)

This is a unit testing framework using Jest.

### Overview:

We need the following to have a unit testing framework using Jest:

- [Jest](https://jestjs.io/en/)
- [jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter)

### Setup:

Please clone this repo and run the following commands:

```sh
git clone https://github.com/nazmulb/unit_test.git
cd unit_test
npm i
```

### Running Tests:

```sh
npm test
```

### Test Coverage Report:

```sh
npm run test:coverage
```

<img alt="Test Coverage Report" src="https://raw.githubusercontent.com/nazmulb/unit_test/master/images/coverage_1.png" width="900px" />

<img alt="Test Coverage Report" src="https://raw.githubusercontent.com/nazmulb/unit_test/master/images/coverage_2.png" width="900px" />

### Test Report:

<img alt="Report" src="https://raw.githubusercontent.com/nazmulb/unit_test/master/images/report.png" width="900px" />

## Jest:

Jest is an open JavaScript testing library from Facebook. Its slogan is "Delightful JavaScript Testing". While Jest can be used to test any JavaScript library, it shines when it comes to React and React Native.

### Getting Started:

Install Jest using `npm`

```sh
npm install --save-dev jest
```

#### Writting our first test:

Let's get started by writing a test for a function that adds two numbers. First, create a `sum.js` file:

`sum.js`:
```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Then, create a file named `sum.test.js`. This will contain our actual test:

`sum.test.js`:
```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Add the following section to your `package.json`:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

In our test file we used `describe` and `test`, Jest puts each of these methods and objects into the global environment. You don't have to require or import anything to use them.

- `describe(name, fn)`: describe(name, fn) creates a block that groups together several related tests.
- `test(name, fn, timeout)`: All you need in a test file is the test method which runs a test. It also under the alias: it(name, fn, timeout). 
- there have lot more methods. Here is the [link](https://jestjs.io/docs/en/api)

#### Run our test:

Finally, run `npm test` and Jest will print this message:

```sh
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
You just successfully wrote your first test using Jest!
```

You can read more from [here](https://jestjs.io/docs/en/getting-started)

Happy learning :)