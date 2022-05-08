/* eslint-disable */
/// <reference types="Cypress" />

const password = 'test-password';
let inboxId;
let emailAddress;

let activationLink;
const universityTest = 'Test University';
const countryTest = 'Colombia';
const phoneTest = '+57555555555';
const urlTest = 'https://test.com';

const studentAccount = 'student@test.com'
const studentPassword = '123456';

describe('Testing login and signup page', () => {
  // todo: skip this test
  it.skip('Can create an account', () => {
    cy.visit('/signup');
    cy.contains('Sign up');

    cy.createInbox().then((inbox) => {
      assert.isDefined(inbox);

      inboxId = inbox.id;
      emailAddress = inbox.emailAddress;

      cy.get("[data-cy='email-input']").type(emailAddress);
      cy.get("[data-cy='pass-input']").type(password);

      cy.get("[data-cy='institution-checkbox']").click();
      cy.get("[data-cy='institution-name']").should('be.visible');

      cy.get("[data-cy='institution-name']").type(universityTest);
      cy.get("[data-cy='institution-country']").select(countryTest);
      cy.get("[data-cy='institution-phone']").type(phoneTest);
      cy.get("[data-cy='institution-url']").type(urlTest);
      cy.get("[data-cy='submit-button']").click();
    });
  });

  // todo: skip this test
  it.skip('can receive the confirmation email and activate his account', () => {
    cy.waitForLatestEmail(inboxId).then((email) => {
      assert.isDefined(email);

      assert.strictEqual(/https:\/\/u26409012\.ct\.sendgrid\.net\/ls\/click\?upn=.*-3D/g.test(email.body), true);
      activationLink = /https:\/\/u26409012\.ct\.sendgrid\.net\/ls\/click\?upn=.*-3D/g.exec(email.body)[0];

      cy.visit(activationLink);
      cy.wait(1000);
    });
  });

  it('should go to signup page', () => {
    cy.visit('/', { timeout: 120000 });
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
    cy.get("[data-cy='email-input']").type(studentAccount);
    cy.get("[data-cy='pass-input']").type(studentPassword);

    cy.get("[data-cy='submit-button']").click();
    cy.get("[data-cy='sidebar-home']").should('be.visible');
  });

  it('should show an error message when credentials are invalid', () => {
    cy.visit('/login');
    cy.get("[data-cy='email-input']").type('example@test.c');
    cy.get("[data-cy='pass-input']").type(studentPassword);

    cy.get("[data-cy='submit-button']").click();
    cy.get("[data-cy='error-message']").should('be.visible');
  });
});
