/// <reference types="cypress" />
const requiredExample = require('../../fixtures/example')
import reset from '../../support/pageObjects/ResetAppPage';

context('Reset', () => {
  
  it('ResetApp', () => {
    const ResetAppPage = new reset();
    cy.visit('https://www.saucedemo.com/')
    ResetAppPage.getEmail().type(requiredExample.email, {force: true})
    ResetAppPage.getPassword().type(requiredExample.pass, {force: true})
    ResetAppPage.getLoginButton().click({multiple: true})
    ResetAppPage.getmenu().click({multiple: true}, {force:true})
    ResetAppPage.getreset().click({multiple: true}, {force:true})
    cy.screenshot()
  })
})




