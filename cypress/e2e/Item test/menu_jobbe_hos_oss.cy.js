it('test Jobbe hos oss',()=>{
   cy.visit('/');
   cy.contains('Velkommen til Item');



   /* ==== Test meny opsjon ==== */
   cy.get('#menu-button > .icon').click();

   cy.contains('Jobbe hos oss');


   /* ==== Jobbe hos oss ==== */
   cy.get(':nth-child(5) > a').click();
   cy.get(':nth-child(5) > a')
    .should('be.visible') ;

   cy.contains('Jobbe hos oss');
   
});