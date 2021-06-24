
class sort {


    getEmail(){
        return cy.get('input[id="user-name"]');
    }
    
    getPassword(){
        return cy.get('input[id="password"]');
    }
    
    getLoginButton() {
        return cy.get('input[id="login-button"]');
    }

    getPrice() {
        return cy.get('[data-test=product_sort_container]').select('lohi');
    }

}
export default sort
    
  