it('test Tjenester',()=>{
   cy.visit('/');
   cy.contains('Velkommen til Item');

   /* ==== Test meny opsjon ==== */
   cy.get('#menu-button > .icon').click();

   cy.contains('Tjenester');


   /* ==== Tjenester ==== */
   cy.get('.list-unstyled > :nth-child(4) > a').click();
   
   cy.get('.list-unstyled > :nth-child(4) > a')
      .should('be.visible') ;
   cy.contains('Tjenester');

});