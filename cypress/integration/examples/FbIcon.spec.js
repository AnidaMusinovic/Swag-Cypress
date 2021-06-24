/// <reference types="cypress" />
const requiredExample = require('../../fixtures/example')
import fb from '../../support/pageObjects/FbIconPage';

context('Fb', () => {
  
  it('Fb icon', () => {
    const FbIconPage = new fb();
    cy.visit('https://www.saucedemo.com/')
    FbIconPage.getEmail().type(requiredExample.email, {force: true})
    FbIconPage.getPassword().type(requiredExample.pass, {force: true})
    FbIconPage.getLoginButton().click({multiple: true})
    cy.scrollTo('bottomLeft')
    FbIconPage.getFbIcon().click({multiple:true}, {force:true})
    
  })
})




