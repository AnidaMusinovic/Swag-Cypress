/// <reference types="cypress" />
const requiredExample = require('../../fixtures/example')
import logout from '../../support/pageObjects/LogOutPage';
import LoginPage from '../../support/pageObjects/loginPage';


context('User logout from website', () => {
  it('navigate', () => {
    cy.visit('https://www.saucedemo.com/')
  })

it('user login', () => {
  const loginPage = new LoginPage();
  loginPage.getEmail().type(requiredExample.email, {force: true})
  loginPage.getPassword().type(requiredExample.pass, {force: true})
  loginPage.getLoginButton().click({multple: true})
})

  it('user logout', () => {
    const SignOutPage = new logout();
    SignOutPage.getmenu().click()
    SignOutPage.getbutton().click()
    SignOutPage.getLoginButton()
    cy.screenshot()
  })
})




