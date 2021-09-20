const LoginPage = require('../pageobjects/login.page');
const SearchFlightPage = require('../pageobjects/search.flight.page');
const CheckoutPage = require('../pageobjects/checkout.page');

describe('Sign In', () => {
    it('Login with email and password', async () => {
        await LoginPage.openUrl();
        await LoginPage.login('robot+qatask@comtravo.com', 'Qatask@08');
        await expect(browser).toHaveUrl(SearchFlightPage.searchFlightUrl);
    });
});

describe('Search Flights', () => {
    it('Select Traveler', async () => {
        await SearchFlightPage.selectTraveler();
        await expect(SearchFlightPage.travelerSelected).toExist();
    })
    it('Select Departure and Destination Airports', async () => {
        await SearchFlightPage.selectDepartureBerlin();
        await SearchFlightPage.selectDestinationMunich();
        await expect(SearchFlightPage.berlinSelected).toExist();
        await expect(SearchFlightPage.munichSelected).toExist();
    });
    it('Select Flight Dates', async () => {
        await SearchFlightPage.selectDates();
        await expect(SearchFlightPage.datesSelected).toExist();
    });
    it('Search Flights', async () => {
        await SearchFlightPage.searchFlights();
        await expect(SearchFlightPage.flightsList).toExist();
    })
});

describe('Select Flight', () => {
    it('Select Flight Option', async () => {
        await SearchFlightPage.selectFlight();
        await expect(browser).toHaveUrl(CheckoutPage.checkoutUrl);
        await expect(CheckoutPage.travelerName).toHaveTextContaining('Sophie lie');
    })
});

describe('Book Flight', () => {
    it('Book Flight', async () => {
        await CheckoutPage.bookFlight();
        await expect(CheckoutPage.thankYouMessage).toExist();
    })
});
