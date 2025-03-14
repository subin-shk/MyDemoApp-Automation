const { $ } = require("@wdio/globals");
// const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WebView {
  // get webView() {
  //   return $(
  //     '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="WebView"]'
  //   );
  // }

  get webViewInput() {
    return $(
      '//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/urlET"]'
    );
  }

  get goToSite() {
    return $("~Tap to view content of given url");
  }

  get googleSearch() {
    return $("//android.widget.EditText");
  }

  get searchBtn() {
    return $('//android.widget.Button[@text="Google खोजी"]');
  }

  get googleSearchInput() {
    return $('//android.view.View[@resource-id="SBmmZd"]');
  }

  // get searchBtn() {
  //   return $('//android.widget.Button[@text="Google खोजी"]');
  // }
}

module.exports = new WebView();
