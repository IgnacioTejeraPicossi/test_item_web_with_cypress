it('Mattilsynet test',()=>{
    cy.visit('/')
    cy.contains('Velkommen til Item');

    cy.get(':nth-child(1) > [href="/kundereferanser"]')
    .should('be.visible');

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > [href="/kundereferanser"]').click();
    /* ==== End Cypress Studio ==== */
    cy.contains('Nytt hovednettsted for mattilsynet');

    /*==== Clcik on not vivsible ==== */
    //cy.get('.label-small text-primary')
    //.click({force: true});
   
} )