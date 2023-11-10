it('test Bloggen',()=>{
   cy.visit('/');
   cy.contains('Velkommen til Item');



   /* ==== Test meny opsjon ==== */
   cy.get('#menu-button > .icon').click();
   cy.contains('Bloggen');




   /* ==== Bloggen ==== */
   cy.get('.list-unstyled > :nth-child(1) > a').click();
   cy.get('.list-unstyled > :nth-child(1) > a')
   .should('be.visible') ;

   cy.contains('Bloggen');

});