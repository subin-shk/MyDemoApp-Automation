const { $ } = require("@wdio/globals");

class Checkout {
  get toCheckout() {
    return $("~Confirms products for checkout");
  }

  get fullName() {
    return $("id:com.saucelabs.mydemoapp.android:id/fullNameET");
  }

  get addressLine1() {
    return $("id:com.saucelabs.mydemoapp.android:id/address1ET");
  }

  get city() {
    return $("id:com.saucelabs.mydemoapp.android:id/cityET");
  }

  get state() {
    return $("id:com.saucelabs.mydemoapp.android:id/stateET");
  }

  get zipCode() {
    return $("id:com.saucelabs.mydemoapp.android:id/zipET");
  }

  get country() {
    return $("id:com.saucelabs.mydemoapp.android:id/countryET");
  }

  get toPayment() {
    return $("~Saves user info for checkout");
  }
}
module.exports = new Checkout();
