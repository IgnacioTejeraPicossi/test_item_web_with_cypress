it('Backend utvikler click',()=>{
  cy.visit('/')
  cy.contains('Velkommen til Item');

  //Jobbe hos oss
  cy.get(':nth-child(1) > [href="/karriere"]',{setTimeout: 3000 }).click();
  cy.contains('Item dekker din master');
  
  


  //Kompetanseutvikling
  cy.get('.block > .list-unstyled > :nth-child(4) > a').click();
  cy.contains('Kompetanseutvikling');
  cy.contains('Item dekker din master');


  //Item dekker din master

  cy.get(':nth-child(3) > .linker-arrow').click();
  
  //cy.contains('Noe har gått galt'); //error
  cy.contains('Mastergrad');
  
     
} )