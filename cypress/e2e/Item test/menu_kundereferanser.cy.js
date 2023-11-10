it('test Kundereferanser',()=>{
   cy.visit('/');
   cy.contains('Velkommen til Item');


   /* ==== Test meny opsjon ==== */
   cy.get('#menu-button > .icon').click();

   cy.contains('Kundereferanser');


   /* ==== Kundereferanser==== */
   cy.get('.list-unstyled > :nth-child(2) > a').click();
   cy.get('.list-unstyled > :nth-child(2) > a')
   .should('be.visible') ;

   cy.contains('Kundereferanser');
   
});