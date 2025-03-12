const { $ } = require("@wdio/globals");
// const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Navigation {
  /**
   * define selectors using getter methods
   */
  get menu() {
    return $("~View menu");
  }

  get catalog() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Catalog"]'
    );
  }

  get login() {
    return $("~Login Menu Item");
  }

  get drawing() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Drawing"]'
    );
  }

  get cart() {
    return $("id:com.saucelabs.mydemoapp.android:id/cartIV");
  }

  async gotoMenu() {
    await this.menu.click();
  }

  async open() {
    await this.gotoMenu();
  }
}

module.exports = new Navigation();
