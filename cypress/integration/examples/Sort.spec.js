/// <reference types="cypress" />
const requiredExample = require('../../fixtures/example')
import sort from '../../support/pageObjects/SortPage';


context('Sort by', () => {
 
  it('Sort products', () => {
    const SortPage = new sort();

    cy.visit('https://www.saucedemo.com/')
    SortPage.getEmail().type(requiredExample.email, {force: true})
    SortPage.getPassword().type(requiredExample.pass, {force: true})
    SortPage.getLoginButton().click({multiple: true})
    SortPage.getPrice()
    cy.screenshot()
  })
})




