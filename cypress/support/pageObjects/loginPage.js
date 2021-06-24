
class LoginPage {

getEmail(){
    return cy.get('input[id="user-name"]');
}

getPassword(){
    return cy.get('input[id="password"]');
}

getLoginButton() {
    return cy.get('input[id="login-button"]');
}

getLogo(){
    return cy.get('.app_logo').should('be.visible');
}
}

export default LoginPage
    
  