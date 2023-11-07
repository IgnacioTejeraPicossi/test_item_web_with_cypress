it('Search for Kontaktperson i Item',()=>{
   cy.visit('/')
   cy.contains('Velkommen til Item');



   /* Search */
   cy.get('#search-button')
       .type('Kontaktperson{enter}');


   cy.get('.layout > .search > .search-field > .button').click();
   cy.contains('Viser 1 resultater');
   cy.contains('Personvernerklæring');


   const numberOfItems = document.getElementsByClassName("list-item").length;
   //cy.contains('.h3 title')
   //expect(numberOfItems).to.eq(1)

   cy.get('.h3').click();
   cy.contains('Behandling av personopplysninger');



} )