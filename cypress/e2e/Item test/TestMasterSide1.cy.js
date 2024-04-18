describe('Pruebas de navegación en el menú de la página principal de item.no', () => {
    beforeEach(() => {
      // Visitar la página principal antes de cada prueba
      cy.visit('https://item.no');
    });
  
    it('Debería navegar a la sección de "Kundereferanser"', () => {
      cy.contains('Kundereferanser').click();
      cy.url().should('include', '/kundereferanser');
    });
  
    it('Debería navegar a la sección de "Tjenester"', () => {
      cy.contains('Tjenester').click();
      cy.url().should('include', '/tjenester');
    });
  
    it('Debería navegar a la sección de "Jobbe hos oss"', () => {
      cy.contains('Jobbe hos oss').click();
      cy.url().should('include', '/Jobbe-hos-oss');
    });
  
    it('Debería navegar a la sección de "Kontakt oss"', () => {
      cy.contains('Kontakt oss').click();
      cy.url().should('include', '/Kontaktpersoner');
    });
  
    it('Debería navegar a la sección de "Bloggen"', () => {
      cy.contains('Bloggen').click();
      cy.url().should('include', '/bloggen');
    });
  });