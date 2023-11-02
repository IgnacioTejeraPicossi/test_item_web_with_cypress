it('test Komtakt oss',()=>{
    cy.visit('/');
    cy.contains('Velkommen til Item');


    cy.get('.header-button-darkmode')
     .click();
    cy.get('.header-button-darkmode')
    .should('be.visible');
    cy.get('.header-button-darkmode')
    .click();

    /* go to Kontakt oss */
    cy.get(':nth-child(1) > [href="/kontaktpersoner"]').click();
    cy.get(':nth-child(1) > [href="/kontaktpersoner"]')
    .should('be.visible');

    //Kontaktpersoner
    cy.contains('Item Consulting AS')
    cy.contains('Tom Arild Jakobsen')
    cy.contains('Thomas Klaesson')
    cy.contains('Ketil Hjerpaasen')
    cy.contains('Erik Borse')
    cy.contains('Svein Kibsgaard')
    
     
 
});