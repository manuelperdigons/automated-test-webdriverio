const Page = require('./page');

class LoginPage extends Page {

    get inputUser() { return $('input[type="email"]') }
    get inputPassword() { return $('input[name="password"]') }
    get buttonSubmit() { return $('button[type="submit"]') }

    async login(username, password) {
        await this.inputUser.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    openUrl() {
        return super.open('/auth/login');
    }
}

module.exports = new LoginPage();
