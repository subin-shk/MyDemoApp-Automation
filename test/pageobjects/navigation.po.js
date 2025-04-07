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
  get fingerPrint() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="FingerPrint"]'
    );
  }
  get fingerPrintToggle() {
    return $(
      '//android.widget.Switch[@content-desc="Enable or disable biometric login"]'
    );
  }

  get webView() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="WebView"]'
    );
  }

  get login() {
    return $("~Login Menu Item");
  }
  get logout() {
    return $("~Logout Menu Item");
  }
  get logoutConfirm() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }
  get qrCodeScanner() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="QR Code Scanner"]'
    );
  }

  get drawing() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Drawing"]'
    );
  }

  get cart() {
    return $("id:com.saucelabs.mydemoapp.android:id/cartIV");
  }

  get sort() {
    return $(
      "~Shows current sorting order and displays available sorting options"
    );
  }

  get nameAscending() {
    return $('//android.widget.TextView[@text="Name - Ascending"]');
  }

  get nameDescending() {
    return $('//android.widget.TextView[@text="Name - Descending"]');
  }

  get priceAscending() {
    return $('//android.widget.TextView[@text="Price - Ascending"]');
  }

  get priceDescending() {
    return $('//android.widget.TextView[@text="Price - Descending"]');
  }

  async gotoMenu() {
    await this.menu.click();
  }

  async open() {
    await this.gotoMenu();
  }
}

module.exports = new Navigation();
