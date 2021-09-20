# Automated Test with WebdriverIO

An automated test suite to validate different use cases on `https://my.qa.comtravo.it/` application. Used different automated testing concepts like page object model or chain selectors. 

## Test cases: 

1. Login with email and password
2. Select Traveler
3. Select Departure and Destination Airports
4. Select Flight Dates
5. Search Flights
6. Select Flight Option
7. Book Flight

## Setup
- Install `npm`
- Open a terminal in the root folder of this project and run `npm install` in order to install all dependencies of the package.json.

## Testing

* Run `npx wdio run wdio.conf.js` and it will run all test that are storaged on `/test/specs` folder

## Libraries / Dependencies

- [WebdriverIO](https://webdriver.io/docs/gettingstarted)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)