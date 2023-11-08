it.only('test Instagram',()=>{
   cy.visit('/');

   cy.contains('Velkommen til Item');


   /* ==== Instagram option==== */
   
   cy.get(':nth-child(3) > :nth-child(2) > a')
   .should('be.visible') ;

   cy.get(':nth-child(3) > :nth-child(2) > a').click();
   

  
});