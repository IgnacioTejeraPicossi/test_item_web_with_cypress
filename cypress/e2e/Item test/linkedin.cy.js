it.only('test Linkedin',()=>{
   cy.visit('/');

   cy.contains('Velkommen til Item');


   /* ==== Linkedin option==== */
   cy.visit('https://item.no/');
   cy.get(':nth-child(3) > :nth-child(3) > a').click();



  
});