describe('Testing user login', () => {
  it('should go to signup page', () => {
    cy.visit('/');
    cy.get("[data-cy='test-button']").click();
    cy.get("[data-cy='title']").should('be.visible');
    cy.get("[data-cy='email-input']").should('be.visible');
    cy.get("[data-cy='pass-input']").should('be.visible');
  });

  it('should show more inputs fields when institution account is check', () => {
    cy.visit('/signup');
    cy.get("[data-cy='institution-checkbox']").click();
    cy.get("[data-cy='institution-name']").should('be.visible');
    cy.get("[data-cy='institution-country']").should('be.visible');
    cy.get("[data-cy='institution-phone']").should('be.visible');
    cy.get("[data-cy='institution-url']").should('be.visible');
  });

  it('should login', () => {
    cy.visit('/login');
    cy.get("[data-cy='email-input']").type('example@test.com');
    cy.get("[data-cy='pass-input']").type('123456');

    cy.get("[data-cy='submit-button']").click();
    cy.get("[data-cy='sidebar-home']").should('be.visible');
  });

  it('should show an error message when credentials are invalid', () => {
    cy.visit('/login');
    cy.get("[data-cy='email-input']").type('example@test.c');
    cy.get("[data-cy='pass-input']").type('123456');

    cy.get("[data-cy='submit-button']").click();
    cy.get("[data-cy='error-message']").should('be.visible');
  });
});
