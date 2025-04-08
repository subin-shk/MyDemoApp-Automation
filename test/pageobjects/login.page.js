const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("id:com.saucelabs.mydemoapp.android:id/nameET");
  }

  get inputPassword() {
    return $("id:com.saucelabs.mydemoapp.android:id/passwordET");
  }

  get emptyUsernameError() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/nameErrorTV"]'
    );
  }
  get emptyPasswordError() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/passwordErrorTV"]'
    );
  }

  get fingerPrintScan() {
    return $(
      '//android.widget.ImageButton[@content-desc="Tap to login using biometric verification"]'
    );
  }

  get btnSubmit() {
    return $("~Tap to login with given credentials");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();
