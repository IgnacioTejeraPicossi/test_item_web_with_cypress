it('test Meny',()=>{
   cy.visit('/');
   cy.contains('Velkommen til Item');



   /* ==== Test meny opsjon ==== */
   cy.get('#menu-button > .icon').click();
   cy.get('#menu-button > .icon')
    .should('be.visible');
    
   cy.contains('Bloggen');
   cy.contains('Kundereferanser');
   cy.contains('Kontakt oss');
   cy.contains('Tjenester');
   cy.contains('Jobbe hos oss');

   
});