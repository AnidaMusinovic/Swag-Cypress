
class fb {

getEmail(){
    return cy.get('input[id="user-name"]');
}

getPassword(){
    return cy.get('input[id="password"]');
}

getLoginButton() {
    return cy.get('input[id="login-button"]');
}

getFbIcon(){
    return cy.get('.social_facebook > a')
}
}

export default fb
    
  