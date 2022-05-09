const studentAccount = 'student@test.com';
const studentPassword = '123456';

describe('Testing Payment Gateway', () => {
  it('should login', () => {
    cy.visit('/login');
    cy.get("[data-cy='email-input']").type(studentAccount);
    cy.get("[data-cy='pass-input']").type(studentPassword);
    cy.get("[data-cy='submit-button']").click();
  });

  it('should go to payment page', () => {
    cy.get("[data-cy='general-page-link']").click();
    cy.get('.buy-button').click();
  });

  it('should pay for the test', () => {
    cy.get('#stripeContainer').within(() => {
      cy.fillElementsInput('cardNumber', '4242424242424242');
      cy.fillElementsInput('cardExpiry', '1025');
      cy.fillElementsInput('cardCvc', '123');
      cy.fillElementsInput('postalCode', '90210');
    });
    cy.get('#pay-button').should('be.visible');
    cy.get('#pay-button').click();
  });
});
