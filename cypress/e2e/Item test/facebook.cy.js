it.only('test Facebook',()=>{
   cy.visit('/');

   cy.contains('Velkommen til Item');


   /* ==== Facebook option==== */
   cy.get(':nth-child(3) > :nth-child(1) > a').click();

});