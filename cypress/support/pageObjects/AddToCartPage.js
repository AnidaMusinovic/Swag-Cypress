
class AddToCart {

getEmail(){
    return cy.get('input[id="user-name"]');
}

getPassword(){
    return cy.get('input[id="password"]');
}

getLoginButton() {
    return cy.get('input[id="login-button"]');
}

getBackpack(){
    return cy.get('button[id="add-to-cart-sauce-labs-backpack"]');
}

getRemoveButton(){
    return cy.get('button[id="remove-sauce-labs-backpack"]').should('be.visible');
}
}
export default AddToCart
    
  