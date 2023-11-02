it('Darkmode Item',()=>{
    cy.visit('/');
    cy.contains('Velkommen til Item');
    /* Search */
   cy.get('#search-button')
   .type('Ruter{enter}');
   cy.get('.header-button-darkmode').click();

});
