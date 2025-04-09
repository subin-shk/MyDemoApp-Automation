const { $ } = require("@wdio/globals");

class Catalog {
  get paymentMethod() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV"]'
    );
  }

  get fullName() {
    return $("id:com.saucelabs.mydemoapp.android:id/nameET");
  }

  get cardNumber() {
    return $("id:com.saucelabs.mydemoapp.android:id/cardNumberET");
  }

  get expireDate() {
    return $("id:com.saucelabs.mydemoapp.android:id/expirationDateET");
  }

  get securityCode() {
    return $("id:com.saucelabs.mydemoapp.android:id/securityCodeET");
  }

  get reviewOrder() {
    return $("~Saves payment info and launches screen to review checkout data");
  }

  get placeOrder() {
    return $("~Completes the process of checkout");
  }

  get continueShopping() {
    return $("~Tap to open catalog");
  }

  get checkoutComplete() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/completeTV"]'
    );
  }
}
module.exports = new Catalog();
