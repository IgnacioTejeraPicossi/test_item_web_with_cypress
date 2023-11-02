it.only('test Bloggen',()=>{
   cy.visit('/');
   cy.contains('Velkommen til Item');


   cy.get('.header-button-darkmode')
   .click();
   cy.get('.header-button-darkmode')
   .should('be.visible')

   /* go to Bloggen */
   cy.get(':nth-child(2) > .linker-arrow-big').click();
   cy.get(':nth-child(2) > .linker-arrow-big')
   .should('be.visible')
   cy.contains('Bloggen')
   cy.contains('Kultur')
   cy.contains('Nyhet')
   cy.contains('Itemdagen')
    
});