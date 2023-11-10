it('test Kontakt oss',()=>{
   cy.visit('/');
   cy.contains('Velkommen til Item');



   /* ==== Test meny opsjon ==== */
   cy.get('#menu-button > .icon').click();

   cy.contains('Kontakt oss');

   /* ==== Kontakt oss ==== */
   cy.get('.list-unstyled > :nth-child(3) > a').click();
   cy.get('.list-unstyled > :nth-child(3) > a')
   .should('be.visible') ;

   cy.contains('Kontaktpersoner');
   cy.contains('Svein');
   cy.contains('Ketil');
   cy.contains('Thomas');
   cy.contains('Erik');
   cy.contains('Tom Arild');
   
   

   
});