
class reset {
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

    getreset(){
        return cy.get('a[id="reset_sidebar_link"]');
    }
}

export default reset
    
  