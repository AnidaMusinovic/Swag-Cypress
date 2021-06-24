class remove{

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

    getTshirt(){
        return cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]');
    }

    getCart(){
        return cy.get('.shopping_cart_link');
    }
  
    getRemove1(){
        return cy.get('[data-test=remove-sauce-labs-backpack]');
    }   

    getRemove2(){
        return cy.get('[data-test=remove-sauce-labs-bolt-t-shirt]');
    }

    getCartEmpty(){
        return cy.get('.shopping_cart_link').should('be.empty');
     }
}
    export default remove
        