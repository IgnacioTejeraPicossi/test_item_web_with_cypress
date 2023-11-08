it('my first Item.no test',()=>{

   
   cy.eyesOpen();
    appName: 'cypress-basics-tau';

   
   cy.visit('/');
   cy.eyesCheckWindow();

  
   cy.contains('Velkommen til Item');
   cy.eyesClose();



    /* Darkmode */
 
 
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#search-button').click();
    cy.get('#q').clear();
    cy.get('#q').type('test');
    cy.get('.button').click();
    /* ==== End Cypress Studio ==== */
    cy.contains('Viser 9 resultater');
 
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/kundereferanser/digitalisering-av-innovasjon-norges-tjenester"] > .mt-s > .h3').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8080/sok?q=test');
    /* ==== End Cypress Studio ==== */
 
 
    /* Search */
    cy.get('#search-button')
       .type('Ruter{enter}');
 
 
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.layout > .search > .search-field > .button').click();
    /* ==== End Cypress Studio ==== */
    cy.contains('Viser 1 resultater');
    cy.contains('Ruter');
 
 
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.header-button-darkmode').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.header-button-darkmode').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.header-button-darkmode').click();
    /* ==== End Cypress Studio ==== */
 } )
 
 /* ==== only run this only  ==== */
 it('new test Item Darkmode',()=>{
     cy.visit('/');
     cy.contains('Velkommen til Item');
     /* Search */
    cy.get('#search-button')
    .type('Ruter{enter}');
     
 });
 
 it('new test Item Darkmode visible',()=>{
    cy.visit('/');
    cy.contains('Velkommen til Item');
    /* Search */
    cy.get('#search-button')
    .type('Ruter{enter}');
    cy.get('.header-button-darkmode')
    .click();
    cy.get('.header-button-darkmode')
        .should('be.visible')
     
     
 
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > [href="/kundereferanser"]').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > [href="/kundereferanser"]').click();
    /* ==== End Cypress Studio ==== */
    cy.get(':nth-child(1) > [href="/kundereferanser"]')
    .should('be.visible');

    

 });
 
 it('new test Item Darkmode visible',()=>{
    cy.visit('/');
    cy.contains('Velkommen til Item');

    /* ==== Assert element i array ==== */
    cy.get(':nth-child(1) > [href="/kundereferanser"]').click();
    cy.get(':nth-child(1) > [href="/kundereferanser"]')
        .should('have.length',1)

      /* ==== Assert checked after force check==== */
      //cy.get('.header-button-darkmode')
       // .check;
      //cy.get('.header-button-darkmode')
       // .should('be.checked');

        /* ==== Assert have.class ==== */
     // cy.get('.header-button-darkmode')
     // .should('have.class','completed');

      /* ==== Assert text ==== */
     
      //cy.get('.header-button-darkmode')
      //.should('have.text','kundereferanser');
  
        
});
it.only('new test Item Darkmode visible',()=>{
   cy.visit('/');
   cy.contains('Velkommen til Item');

   /* ==== have  text ==== */
   cy.get('.richtext > :nth-child(1) > [href="/tjenester"]')
   .should('have.text','Tjenester');

   
   /* ==== contains text ==== */
   cy.get('.richtext > :nth-child(1) > [href="/tjenester"]').click();
   /* ==== End Cypress Studio ==== */
   cy.contains('Tjenester');


   cy.visit('/');
   cy.get('#search-button').click();
 /* ==== for input element we use value not text ==== */  
   cy.get('#q').clear('t');
   cy.get('#q').type('test');
   cy.get('#q')
   .should('have.value','test');

});