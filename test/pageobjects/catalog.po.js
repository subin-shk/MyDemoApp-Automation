const { $ } = require("@wdio/globals");

class Catalog{
  get bag1() {
    return $('(//android.widget.ImageView[@content-desc="Product Image"])[1]');
  }

  get oneStar() {
    return $(
      '//android.widget.ImageView[@resource-id="com.saucelabs.mydemoapp.android:id/start1IV"]'
    );
  }

  get fiveStar() {
    return $("id:com.saucelabs.mydemoapp.android:id/start5IV");
  }

  get closeDialogBox() {
    return $("~Closes review dialog");
  }

  get addToCart() {
    return $("~Tap to add product to cart");
  }
}
module.exports = new Catalog();
