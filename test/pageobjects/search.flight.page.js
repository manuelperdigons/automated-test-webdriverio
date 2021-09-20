const Page = require('./page');

class SearchFlightPage extends Page {

    get searchFlightUrl() { return 'https://my.qa.comtravo.it/search/flight' }
    get inputSelectTrav() { return $('input[placeholder="Select travelers"]') }
    get userSophie() { return $('p[data-cy="Sophie"]') }
    get inputDeparture() { return $('input[placeholder="Departure"]') }
    get inputDestination() { return $('input[placeholder="Destination"]') }
    get berlinOption() { return $('div[data-cy="Berlin Brandenburg"]') }
    get munichOption() { return $('div[data-cy="Franz Josef Strauss"]') }
    get buttonSelectDates() { return $('p[class="ctr-input-datepicker ctr-input-datepicker--placeholder ng-star-inserted"]') }
    get calendar() { return $('div[class="ctr-overlay__content"]') }
    get currentMonth() { return this.calendar.$('div[class="ctr-calendar ctr-calendar--is-current-month-calendar ctr-calendar--is-range"]') }
    get departureDay() { return this.currentMonth.$('div[class="ctr-month__date ng-star-inserted"]:nth-child(1)').$('button') }
    get returnDay() { return this.currentMonth.$('div[class="ctr-month__date ng-star-inserted"]:nth-child(3)').$('button') }
    get nextMonthHeader() { return this.calendar.$('div[class="ctr-calendar ctr-calendar--is-range"]').$('div[class="ctr-header ctr-header--is-next-month-calendar ng-untouched ng-pristine ng-valid"]') }
    get nextPageButton() { return this.nextMonthHeader.$('div[class="ctr-header__arrow ctr-header__arrow--next"]').$('button[class="ctr-header__button ctr-header__button--next"]') }
    get searchFlightButton() { return $('button[class="button search-form__search-button"]') }
    get flightsList() { return $('div[class="col"]') }
    get flightOption() { return $('div[class="col"]:nth-child(2)').$('div[class="ctr-search-result-item-price"]').$('button') }
    get travelerSelected() { return $('span[class="chip"]') }
    get berlinSelected() { return $('//html/body/app-root/ctr-main-container/div[1]/ctr-flight-search/ctr-layout/div/div[1]/ctr-search-collapse-container/div/ctr-card/div/div[2]/ctr-animate-height/div[2]/ctr-card-content/div/ctr-flight-form/div/ctr-flight-type/div/div[1]/div/ctr-autocomplete[1]/div/label/div/input') }
    get munichSelected() { return $('//html/body/app-root/ctr-main-container/div[1]/ctr-flight-search/ctr-layout/div/div[1]/ctr-search-collapse-container/div/ctr-card/div/div[2]/ctr-animate-height/div[2]/ctr-card-content/div/ctr-flight-form/div/ctr-flight-type/div/div[1]/div/ctr-autocomplete[2]/div/label/div/input') }
    get datesSelected() { return $('p[class="ctr-input-datepicker ng-star-inserted"]') }

    async selectTraveler() {
        await this.inputSelectTrav.click();
        await this.inputSelectTrav.setValue('Sophie');
        const selectUser = await this.userSophie.parentElement();
        await selectUser.click();
    }
    async selectDepartureBerlin() {
        await this.inputDeparture.setValue('BER');
        const berlinOption = await this.berlinOption.parentElement();
        await berlinOption.click();
    }
    async selectDestinationMunich() {
        await this.inputDestination.setValue('MUC');
        const munichOption = await this.munichOption.parentElement();
        await munichOption.click();
    }
    async selectDates() {
        await this.buttonSelectDates.click();
        await this.nextPageButton.click();
        await this.nextPageButton.click();
        await this.departureDay.click();
        await this.returnDay.click();
    }
    async searchFlights() {
        await this.searchFlightButton.click();
        await this.flightsList.waitForDisplayed({ timeout: 190000 })
    }
    async selectFlight() {
        await this.flightOption.click();
    }
}

module.exports = new SearchFlightPage();
