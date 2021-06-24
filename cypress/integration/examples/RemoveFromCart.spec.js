/// <reference types="cypress" />
const requiredExample = require('../../fixtures/example')
import remove from '../../support/pageObjects/RemoveFromCartPage';

context('Remove', () => {
  
  it('Remove product from cart', () => {
    const RemoveFromCartPage = new remove();
    cy.visit('https://www.saucedemo.com/')
    RemoveFromCartPage.getEmail().type(requiredExample.email, {force: true})
    RemoveFromCartPage.getPassword().type(requiredExample.pass, {force: true})
    RemoveFromCartPage.getLoginButton().click({multiple: true})
    RemoveFromCartPage.getBackpack().click({multiple: true}, {force:true})
    RemoveFromCartPage.getTshirt().click({multiple: true}, {force:true})
    RemoveFromCartPage.getCart().click({multiple: true}, {force:true})
    RemoveFromCartPage.getRemove1().click({multiple: true}, {force:true})
    RemoveFromCartPage.getRemove2().click({multiple: true}, {force:true})
    RemoveFromCartPage.getCartEmpty()
    cy.screenshot()
  })
})




