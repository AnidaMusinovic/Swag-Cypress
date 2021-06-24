/// <reference types="cypress" />
const requiredExample = require('../../fixtures/example')
import about from '../../support/pageObjects/AboutPage';

context('About website', () => {
  
  it('about', () => {
    const AboutPage = new about();

    cy.visit('https://www.saucedemo.com/')
    AboutPage.getEmail().type(requiredExample.email, {force: true})
    AboutPage.getPassword().type(requiredExample.pass, {force: true})
    AboutPage.getLoginButton().click({multiple: true})
    AboutPage.getmenu().click({multiple: true}, {force:true})
    AboutPage.getabout().click({multiple: true}, {force:true})
    cy.screenshot()
  })
})




