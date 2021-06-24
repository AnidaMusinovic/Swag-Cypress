
class logout {
    
    getmenu(){
        return cy.get('button[id="react-burger-menu-btn"]');
    }

    getbutton(){
        return cy.get('#logout_sidebar_link');
    }

    getLoginButton(){
        return cy.get('[data-test=login-button]').should('be.visible')  
    }
    
}

export default logout
    
  