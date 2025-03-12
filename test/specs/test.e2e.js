const { expect, browser } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const Navigation = require("../pageobjects/navigation.po");
const SecurePage = require("../pageobjects/secure.page");
const testData = require("../../fixtures/loginFixtures.json");

describe("My Demo App", () => {
  it("should login with valid credentials", async () => {
    // browser.pause(7000);
    await Navigation.open();

    // await browser.pause(3000);
    await Navigation.login.click();

    // await browser.pause(2000);
    await LoginPage.login(
      testData.validUser.userName,
      testData.validUser.password
    );

    // browser.pause(5000);
  });

  it("should go to drawing and draw a rectangle", async () => {
    await Navigation.open();

    await Navigation.drawing.click();

    await browser.pause(5000);

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
    await $("id:com.saucelabs.mydemoapp.android:id/clearBtn").click();
  });

  it("should go to drawing and draw a circle (pentagon)", async () => {
    await Navigation.open();

    await Navigation.drawing.click();

    await browser.pause(3000);

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
    await $("id:com.saucelabs.mydemoapp.android:id/clearBtn").click();
  });

  it("should navigate to catalogue and select first item and put it to cart", async () => {
    await Navigation.open();
    await Navigation.catalog.click();
    bag1 = await $(
      '(//android.widget.ImageView[@content-desc="Product Image"])[1]'
    );
    await bag1.click();
    fiveStar = await $("id:com.saucelabs.mydemoapp.android:id/start5IV");
    await fiveStar.click();
    closeDialogueBox = await $("~Closes review dialog");

    await closeDialogueBox.click();

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

        await browser.pause(1000);

        isElementVisible = await element.isDisplayed().catch(() => false);
        swipeCount++;
      }

      if (!isElementVisible) {
        throw new Error("Element not found after scrolling!");
      }

      await element.click();
    }

    // Locate "Picker" and scroll to it
    const myElement = await $("~Tap to add product to cart");
    await scrollUntilElementIsVisible(myElement);

    await browser.pause(2000);
  });
  it("should go to cart", async () => {
    await Navigation.cart.click();
    await browser.back();
  });
});
