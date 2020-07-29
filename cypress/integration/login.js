describe('trello log in', () => {
    it('should be able to log in', () => {
        cy.visit('/login')
        cy.get('#user').type('rcgongora')
        cy.get('#password').type('rcgongora')
        cy.get('#login').click()
        cy.url().should('include', '/boards')
    });
});