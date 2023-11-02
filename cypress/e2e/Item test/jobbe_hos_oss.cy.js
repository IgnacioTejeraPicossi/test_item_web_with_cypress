it.only('test Jobbbe hos oss',()=>{
    cy.visit('/');
    cy.contains('Velkommen til Item');


    cy.get('.header-button-darkmode')
     .click();
    cy.get('.header-button-darkmode')
    .should('be.visible');
    cy.get('.header-button-darkmode')
    .click();

    /* go to Jobbbe hos oss */
    cy.get(':nth-child(1) > [href="/karriere"]').click();
    cy.get(':nth-child(1) > [href="/karriere"]')
    .should('be.visible');

    cy.contains('Bloggen')
    
     
 
});