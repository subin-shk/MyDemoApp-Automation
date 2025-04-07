const { expect, browser } = require("@wdio/globals");
const { remote } = require("webdriverio");
const LoginPage = require("../pageobjects/login.page");
const Navigation = require("../pageobjects/navigation.po");
const Catalog = require("../pageobjects/catalog.po");
const Checkout = require("../pageobjects/checkout.po");
const WebView = require("../pageobjects/webView.po");
const Payment = require("../pageobjects/payment.po");
const SecurePage = require("../pageobjects/secure.page");
const testData = require("../../fixtures/loginFixtures.json");
const webData = require("../../fixtures/webViewFixtures.json");
const checkoutData = require("../../fixtures/checkoutFixtures.json");

describe("My Demo App", () => {
  before(async () => {
    await driver.startRecordingScreen();
    // browser.pause(7000);
    await Navigation.open();

    try {
      const isLoginButtonDisplayed = await Navigation.login.isDisplayed();
      expect(isLoginButtonDisplayed).toBe(true);
      await Navigation.login.click();

      await LoginPage.login(
        testData.validUser.userName,
        testData.validUser.password
      );
    } catch (error) {
      console.log("Login button is not displayed. Error: ", error);
    }

    // browser.pause(5000);
  });

  it("should sort by - and scroll", async () => {
    await Navigation.sort.click();
    await Navigation.priceAscending.click();

    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          {
            type: "pointerMove",
            duration: 0,
            x: 500,
            y: 1800,
            origin: "viewport",
          },
          { type: "pointerDown", button: 0 },

          {
            type: "pointerMove",
            duration: 1000,
            x: 500,
            y: 200,
            origin: "viewport",
          },

          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  });

  it("should go to drawing and draw a rectangle", async () => {
    await Navigation.open();

    await Navigation.drawing.click();

    // await browser.pause(5000);

    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          {
            type: "pointerMove",
            duration: 0,
            x: 215,
            y: 748,
            origin: "viewport",
          },
          { type: "pointerDown", button: 0 },

          {
            type: "pointerMove",
            duration: 500,
            x: 815,
            y: 748,
            origin: "viewport",
          },

          {
            type: "pointerMove",
            duration: 500,
            x: 815,
            y: 1200,
            origin: "viewport",
          },

          {
            type: "pointerMove",
            duration: 500,
            x: 215,
            y: 1200,
            origin: "viewport",
          },

          {
            type: "pointerMove",
            duration: 500,
            x: 215,
            y: 748,
            origin: "viewport",
          },

          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    const isClearButtonVisible = await $(
      "id:com.saucelabs.mydemoapp.android:id/clearBtn"
    ).isDisplayed();
    expect(isClearButtonVisible).toBe(true);

    await $("id:com.saucelabs.mydemoapp.android:id/clearBtn").click();
  });

  it("should go to drawing and draw a circle (pentagon)", async () => {
    // await Navigation.open();

    // await Navigation.drawing.click();

    // await browser.pause(3000);

    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          {
            type: "pointerMove",
            duration: 0,
            x: 200,
            y: 888,
            origin: "viewport",
          },
          { type: "pointerDown", button: 0 },

          {
            type: "pointerMove",
            duration: 500,
            x: 345,
            y: 715,
            origin: "viewport",
          },

          {
            type: "pointerMove",
            duration: 500,
            x: 800,
            y: 715,
            origin: "viewport",
          },

          {
            type: "pointerMove",
            duration: 910,
            x: 921,
            y: 888,
            origin: "viewport",
          },

          {
            type: "pointerMove",
            duration: 500,
            x: 921,
            y: 1315,
            origin: "viewport",
          },
          {
            type: "pointerMove",
            duration: 500,
            x: 800,
            y: 1475,
            origin: "viewport",
          },
          {
            type: "pointerMove",
            duration: 500,
            x: 345,
            y: 1475,
            origin: "viewport",
          },
          {
            type: "pointerMove",
            duration: 500,
            x: 200,
            y: 1315,
            origin: "viewport",
          },
          {
            type: "pointerMove",
            duration: 500,
            x: 200,
            y: 888,
            origin: "viewport",
          },

          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    const isClearButtonVisible = await $(
      "id:com.saucelabs.mydemoapp.android:id/clearBtn"
    ).isDisplayed();
    expect(isClearButtonVisible).toBe(true);

    await $("id:com.saucelabs.mydemoapp.android:id/clearBtn").click();
  });
  it("should go to drawing and draw a circle ", async () => {
    // await Navigation.open();
    // await Navigation.drawing.click();

    // await browser.pause(3000);

    const centerX = 600;
    const centerY = 1100;
    const radius = 200;
    const steps = 100;

    let actions = [
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [],
      },
    ];

    for (let i = 0; i <= steps; i++) {
      let angle = (i / steps) * 2 * Math.PI;
      let x = Math.round(centerX + radius * Math.cos(angle));
      let y = Math.round(centerY + radius * Math.sin(angle));

      if (i === 0) {
        actions[0].actions.push({
          type: "pointerMove",
          duration: 0,
          x,
          y,
          origin: "viewport",
        });
        actions[0].actions.push({ type: "pointerDown", button: 0 });
      } else {
        actions[0].actions.push({
          type: "pointerMove",
          duration: 50,
          x,
          y,
          origin: "viewport",
        });
      }
    }

    actions[0].actions.push({ type: "pointerUp", button: 0 });

    await browser.performActions(actions);

    await $("id:com.saucelabs.mydemoapp.android:id/clearBtn").click();
  });

  it("should navigate to catalogue and select first item and put it to cart", async () => {
    await Navigation.open();
    await Navigation.catalog.click();
    await Catalog.bag1.click();
    await Catalog.fiveStar.click();
    await Catalog.closeDialogBox.click();

    async function scrollUntilElementIsVisible(element, maxSwipes = 5) {
      let isElementVisible = await element.isDisplayed().catch(() => false);
      let swipeCount = 0;

      while (!isElementVisible && swipeCount < maxSwipes) {
        await browser.performActions([
          {
            type: "pointer",
            id: "finger1",
            parameters: { pointerType: "touch" },
            actions: [
              {
                type: "pointerMove",
                duration: 0,
                x: 500,
                y: 1500,
                origin: "viewport",
              },
              { type: "pointerDown", button: 0 },
              {
                type: "pointerMove",
                duration: 500,
                x: 500,
                y: 500,
                origin: "viewport",
              },
              { type: "pointerUp", button: 0 },
            ],
          },
        ]);

        // await browser.pause(1000);

        isElementVisible = await element.isDisplayed().catch(() => false);
        swipeCount++;
      }

      if (!isElementVisible) {
        throw new Error("Element not found after scrolling!");
      }

      await element.click();
    }

    const myElement = await Catalog.addToCart;
    await scrollUntilElementIsVisible(myElement);

    const cartCount = await Catalog.cartCount.getText();
    expect(parseInt(cartCount)).toBeGreaterThan(0);
  });

  it("should go to cart", async () => {
    await Navigation.cart.click();
    // await browser.back();
  });

  it("should fill in checkout details and go to payment", async () => {
    await Checkout.toCheckout.click();
    await Checkout.fullName.setValue(checkoutData.checkoutDetails.fullName);
    await Checkout.addressLine1.setValue(
      checkoutData.checkoutDetails.addressLine1
    );
    await Checkout.city.setValue(checkoutData.checkoutDetails.city);
    await Checkout.state.setValue(checkoutData.checkoutDetails.state);
    await Checkout.zipCode.setValue(checkoutData.checkoutDetails.zipCode);
    await Checkout.country.setValue(checkoutData.checkoutDetails.country);
    await Checkout.toPayment.click();
  });

  it("should fill in payment details and place order", async () => {
    // await browser.pause(2000);
    await Payment.fullName.setValue(checkoutData.paymentDetails.fullName);
    await Payment.cardNumber.setValue(checkoutData.paymentDetails.cardNumber);
    await Payment.expireDate.setValue(checkoutData.paymentDetails.expireDate);
    await Payment.securityCode.setValue(
      checkoutData.paymentDetails.securityCode
    );
    await Payment.reviewOrder.click();
    await Payment.placeOrder.click();

    const checkoutComplete = await Payment.checkoutComplete.getText();
    expect(checkoutComplete).toContain("Checkout Complete");

    await Payment.continueShopping.click();
    // await browser.pause(5000);
  });

  it("should logout", async () => {
    await Navigation.open();
    await Navigation.logout.click();
    await Navigation.logoutConfirm.click();
  });

  it("should go to fingerpint and turn finger option on and be able to login with fingerprint", async () => {
    await Navigation.open();
    await Navigation.fingerPrint.click();
    await Navigation.fingerPrintToggle.click();

    await Navigation.open();
    await Navigation.login.click();
    await LoginPage.fingerPrintScan.click();
    // await browser.pause(7000);
  });

  it("should go to webview and search", async () => {
    await Navigation.open();
    await Navigation.webView.click();
    await WebView.webViewInput.click();
    await WebView.webViewInput.setValue(webData.google.url);
    await WebView.goToSite.waitForExist({ timeout: 5000 });
    await WebView.goToSite.click();

    // await browser.pause(7000);
    await WebView.googleSearch.waitForExist({ timeout: 10000 });
    await WebView.googleSearch.setValue(webData.google.search);
    await WebView.searchBtn.click();

    // await WebView.goog8leSearchInput.waitForDisplayed({ timeout: 5000 });
    // await WebView.googleSearchInput.waitForEnabled({ timeout: 5000 });
    // await WebView.googleSearchInput.addValue(webData.google.search);
    await browser.keys("Enter"); // or "\n"

    await browser.pause(5000);

    await browser.back();
  });

  it("should navigate to QR Code Scanner and scan QR code", async () => {
    await Navigation.open();
    await Navigation.qrCodeScanner.click();
    await browser.pause(10000);
    await browser.back();
    await browser.pause(5000);
  });

  after(async () => {
    const video = await driver.stopRecordingScreen();

    const fs = require("fs");
    fs.writeFileSync("SubinRecording.mp4", Buffer.from(video, "base64"));

    await driver.deleteSession();
  });
});
