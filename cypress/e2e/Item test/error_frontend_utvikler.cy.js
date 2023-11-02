it('Frontend utvikler click',()=>{
  cy.visit('/')
  cy.contains('Velkommen til Item');

  //Jobbe hos oss
  cy.get(':nth-child(1) > [href="/karriere"]').click();
  cy.contains('Frontend');


  //Ledig stillinger
  cy.get('.block > .list-unstyled > :nth-child(1)').click();
  cy.contains('Ledig stillinger');
  cy.contains('Frontend');

   

  //Frontend utvikler
  cy.get(':nth-child(1) > .linker-arrow').click();
  //cy.contains('Noe har gått galt'); error
  cy.contains('Frontend');
  
} )