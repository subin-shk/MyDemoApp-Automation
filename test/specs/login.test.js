// test/specs/login.test.js
const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const Navigation = require("../pageobjects/navigation.po");
const testData = require("../../fixtures/loginFixtures.json");

async function validLogin() {
  await Navigation.open();
  const isLoginButtonDisplayed = await Navigation.login.isDisplayed();
  expect(isLoginButtonDisplayed).toBe(true);
  await Navigation.login.click();

  await LoginPage.login(
    testData.validUser.userName,
    testData.validUser.password
  );
}

async function emptyUsernameLogin() {
  await Navigation.open();
  const isLoginButtonDisplayed = await Navigation.login.isDisplayed();
  expect(isLoginButtonDisplayed).toBe(true);
  await Navigation.login.click();

  await LoginPage.login(
    testData.emptyUsername.userName,
    testData.emptyUsername.password
  );

  const errorMessage = await LoginPage.emptyUsernameError.getText();
  expect(errorMessage).toContain("Username is required");
}

async function emptyPasswordLogin() {
  await Navigation.open();
  const isLoginButtonDisplayed = await Navigation.login.isDisplayed();
  expect(isLoginButtonDisplayed).toBe(true);
  await Navigation.login.click();

  await LoginPage.login(
    testData.emptyPassword.userName,
    testData.emptyPassword.password
  );

  const errorMessage = await LoginPage.emptyPasswordError.getText();
  expect(errorMessage).toContain("Password is required");
}

module.exports = {
  validLogin,
  emptyUsernameLogin,
  emptyPasswordLogin,
};
