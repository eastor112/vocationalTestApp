/// <reference types="Cypress" />

describe('Testing user login', () => {
  it('should display the Landing page', () => {
    cy.visit('/');
    cy.get("[data-cy='hero-section']").should('be.visible');
    cy.get("[data-cy='test-button']").should('be.visible');
    cy.get("[data-cy='search-button']").should('be.visible');
  });

  it('should display about page', () => {
    cy.visit('/about');
    cy.get("[data-cy='about-page-title']").should('be.visible');
    cy.get("[data-cy='about-page-mission']").should('be.visible');
  });

  it('should display contact page', () => {
    cy.visit('/contact');
    cy.get("[data-cy='contact-page-title']").should('be.visible');
    cy.get("[data-cy='contact-page-info']").should('be.visible');
  });

  it('should go to univerities search page', () => {
    cy.visit('/');
    cy.get("[data-cy='search-button']").click();
    cy.get("[data-cy='country-select']").should('be.visible');
    cy.get("[data-cy='career-select']").should('be.visible');
    cy.get("[data-cy='search-input']").should('be.visible');
    cy.get("[data-cy='university-card']").should('have.length.at.least', 5);
  });

  it('should go to univerities search page', () => {
    cy.visit('/search');

    cy.get('.card-container a:first').click();

    cy.get("[data-cy='university-name']").should('be.visible');
    cy.get("[data-cy='map']").should('be.visible');
    cy.get('.social-media-links a').should('have.length', 4);
  });
});
