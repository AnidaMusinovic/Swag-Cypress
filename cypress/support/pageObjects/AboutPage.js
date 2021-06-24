
class about {
    getEmail(){
        return cy.get('input[id="user-name"]');
    }
    
    getPassword(){
        return cy.get('input[id="password"]');
    }
    
    getLoginButton() {
        return cy.get('input[id="login-button"]');
    }

    getmenu(){
        return cy.get('button[id="react-burger-menu-btn"]');
    }

    getabout(){
        return cy.get('#about_sidebar_link');
        
    }
}

export default about
    
  