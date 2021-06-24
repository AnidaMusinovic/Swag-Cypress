/// <reference types="cypress" />
const requiredExample = require('../../fixtures/example')
import LoginPage from '../../support/pageObjects/loginPage';

context('User log in website', () => {
  
  it('user login', () => {
    const loginPage = new LoginPage();
    cy.visit('https://www.saucedemo.com/')
    loginPage.getEmail().type(requiredExample.email, {force: true})
    loginPage.getPassword().type(requiredExample.pass, {force: true})
    loginPage.getLoginButton().click({multiple: true})
    loginPage.getLogo()
    cy.screenshot()
  })
})




