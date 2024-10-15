it('Tjenester option',()=>{
   cy.visit('/')
   cy.contains('Velkommen til Item');


   /* ==== Tjenester  ==== */
   cy.contains('Tjenester');
   cy.get('.richtext > :nth-child(1) > [href="/tjenester"]').click();
    
   cy.contains('Universell utforming');

} )