it.only('test kundereferanse',()=>{
    cy.visit('/');
    cy.contains('Velkommen til Item');
    /* Search */
    cy.get('#search-button')
    .type('Ruter{enter}');
    cy.get('.header-button-darkmode')
    .click();
    cy.get('.header-button-darkmode')
    .should('be.visible')
 
  
    cy.get(':nth-child(1) > [href="/kundereferanser"]').click();
  
    cy.contains('Mattilsynet')
    cy.contains('Nasjonal kommunikasjonsmyndighet')
    
    cy.get(':nth-child(1) > [href="/kundereferanser"]')
    .should('be.visible')
 });