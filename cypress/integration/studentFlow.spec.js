/// <reference types="Cypress" />
const studentAccount = 'student@test.com';
const studentPassword = '123456';

describe('Student flow', () => {
  it('should login', () => {
    cy.visit('/', { timeout: 120000 });
    cy.get("[data-cy='login-link']").click();
    cy.get("[data-cy='title']").should('be.visible');
    cy.get("[data-cy='email-input']").should('be.visible');
    cy.get("[data-cy='pass-input']").should('be.visible');

    cy.get("[data-cy='email-input']").type(studentAccount);
    cy.get("[data-cy='pass-input']").type(studentPassword);
    cy.get("[data-cy='submit-button']").click();
    cy.get("[data-cy='sidebar-home']").should('be.visible');

    cy.get("[data-cy='general-page-link']").click();
    cy.get('.take-test-button:first').click();
    cy.get("[data-cy='test-title']").should('be.visible');

    cy.get("[data-cy='statement-question']").should('have.length.at.least', 5);

    cy.get("[data-cy='input-question-a']").then(($buttons) => {
      const buttonCount = $buttons.length;

      for (let i = 0; i < buttonCount; i += 4) {
        cy.get("[data-cy='input-question-a']").eq(i).click();
      }

      for (let i = 1; i < buttonCount; i += 4) {
        cy.get("[data-cy='input-question-b']").eq(i).click();
      }

      for (let i = 2; i < buttonCount; i += 4) {
        cy.get("[data-cy='input-question-c']").eq(i).click();
      }

      for (let i = 3; i < buttonCount; i += 4) {
        cy.get("[data-cy='input-question-d']").eq(i).click();
      }
    });

    cy.get("[data-cy='finish-test']").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);

    cy.get('.career-list-item:first').click();

    cy.get('.career-detail-link:first').click();
  });
});
