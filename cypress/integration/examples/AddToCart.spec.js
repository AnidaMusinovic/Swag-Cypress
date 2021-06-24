/// <reference types="cypress" />
const requiredExample = require('../../fixtures/example')
import AddToCart from '../../support/pageObjects/AddToCartPage';

context('User order', () => {
  
  it('user order backpack', () => {
    const AddToCartPage = new AddToCart();
    cy.visit('https://www.saucedemo.com/')
    AddToCartPage.getEmail().type(requiredExample.email, {force: true})
    AddToCartPage.getPassword().type(requiredExample.pass, {force: true})
    AddToCartPage.getLoginButton().click({multiple: true})
    AddToCartPage.getBackpack().click({multiple: true}, {force:true})
    AddToCartPage.getRemoveButton()
    
    cy.screenshot()
  })
})




