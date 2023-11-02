it('Backend utvikler click',()=>{
  cy.visit('/')
  cy.contains('Velkommen til Item');

  //Jobbe hos oss
  cy.get(':nth-child(1) > [href="/karriere"]').click();
  cy.contains('Backend');


  //Ledig stillinger
  cy.get('.block > .list-unstyled > :nth-child(1)').click();
  cy.contains('Ledig stillinger');
  cy.contains('Backend');


  //Frontend utvikler
  cy.get('#ledig_stillinger > :nth-child(1) > .richtext > :nth-child(2) > .linker-arrow').click();
  //cy.contains('Noe har gått galt'); error
  cy.contains('Backend')
 
  
 
} )