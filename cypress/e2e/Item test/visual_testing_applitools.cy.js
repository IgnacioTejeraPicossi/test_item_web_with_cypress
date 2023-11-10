const { Eyes, Target } = require('@applitools/eyes-cypress');

describe('Visual Testing Example', () => {
  it('should display a webpage', () => {
    cy.visit('/');

    cy.eyesOpen({
      appName: 'cypress-basics-tau',
      testName: 'Test Ignacio',
    });

    cy.eyesCheckWindow('Main Page');

    cy.eyesClose();
  });
});