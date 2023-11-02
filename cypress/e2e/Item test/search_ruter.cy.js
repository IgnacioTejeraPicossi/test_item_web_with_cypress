it('Search for Ruter i Item',()=>{
    cy.visit('/')
    cy.contains('Velkommen til Item');
 
    
    /* Search */
    cy.get('#search-button')
       .type('Ruter{enter}');
 
 
    cy.get('.layout > .search > .search-field > .button').click();
    
    cy.contains('Viser 1 resultater');
    cy.contains('Ruter');
 
 
 } )