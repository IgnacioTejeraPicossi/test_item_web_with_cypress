beforeEach(()=>{

    cy.eyesOpen();
    appName: 'cypress-basics-tau';


});
it('plugins',()=>{
   
   
 
    cy.visit('/')
    cy.contains('Velkommen til Item');
    cy.get('.header-button-darkmode')
    .should('be.visible');
     
    cy.eyesCheckWindow();
     
 
} );
afterEach(()=>{

    cy.eyesClose();

});