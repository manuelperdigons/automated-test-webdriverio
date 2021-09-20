const Page = require('../pageobjects/page');

class CheckoutPage {
    get checkoutUrl() { return 'https://my.qa.comtravo.it/search/flight/checkout' }
    get travelerName() { return $('span[class="ctr-checkout-traveler__traveler-name"]') }
    get bookButton() { return $('//html/body/app-root/ctr-main-container/div[1]/ctr-flight-checkout/form/ctr-form-action/footer/div/button') }
    get thankYouMessage() { return $('div[class="confirmation-message"]') }

    async bookFlight() {
        await this.bookButton.click();
    }
}

module.exports = new CheckoutPage();