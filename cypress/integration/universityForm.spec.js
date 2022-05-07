/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="Cypress" />

const institutionAccount = 'institution@test.com';
const institutionPassword = '123456';

describe('Sign up', () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  // todo: remove account credentials
  it('can login into account', () => {
    cy.visit('/login');
    cy.get("[data-cy='email-input']").type(institutionAccount);
    cy.get("[data-cy='pass-input']").type(institutionPassword);
    cy.get("[data-cy='submit-button']").click();

    cy.get("[data-cy='sidebar-home']").should('be.visible');
    cy.get("[data-cy='sidebar-institution']").should('be.visible');

    cy.get("[data-cy='sidebar-institution']").click();
    cy.get("[data-cy='tab-main']").should('be.visible');
    cy.get("[data-cy='tab-media']").should('be.visible');
    cy.get("[data-cy='tab-admission']").should('be.visible');
    cy.get("[data-cy='tab-social']").should('be.visible');
    cy.get("[data-cy='tab-offers']").should('be.visible');
  });

  it('can update institution main data', () => {
    const universityTest = 'Test University 10';
    const missionTest = 'Test mission';
    const visionTest = 'Test vision';
    const worldWideRankingTest = '500';
    const nationalRankingTest = '5';
    const urlTest = 'https://test.com';
    const countryTest = 'Peru';
    const cityTest = 'Trujillo';

    cy.get("[data-cy='tab-main']").click();
    cy.get('#name').clear().type(universityTest);
    cy.get('#mission').clear().type(missionTest);
    cy.get('#vision').clear().type(visionTest);
    cy.get('#worldwide').clear().type(worldWideRankingTest).trigger('change');
    cy.get('#national').clear().type(nationalRankingTest).trigger('change');
    cy.get('#url').clear().type(urlTest);
    cy.get('#country').select(countryTest);
    cy.get('#city').select(cityTest);
    cy.get("[data-cy='update-main']").click();
    cy.wait(1000);

    cy.get("[data-cy='see-university-changes']").click();
    cy.contains(universityTest);
    cy.contains('Test mission');
    cy.contains('Test vision');
  });

  it('can update institution media', () => {
    const filePathLogo = '../../src/assets/avatar-male.png';
    const filePathCampus = '../../src/assets/girl-choosing.jpg';

    cy.visit('/dashboard/general');
    cy.get("[data-cy='sidebar-institution']").click();
    cy.get("[data-cy='tab-media']").click();

    cy.get("[data-cy='input-logo']").attachFile(filePathLogo);
    cy.get("[data-cy='input-campus']").attachFile(filePathCampus);
    cy.get("[data-cy='update-media']").click();
    cy.wait(5000);

    cy.get("[data-cy='see-university-changes']").click();
    cy.get("[data-cy='campus-image']").should('be.visible');
    cy.wait(500);

    cy.go('back');
    cy.get("[data-cy='delete-logo']").click();
    cy.get('button').contains('Yes, delete it!').click();
    cy.wait(500);

    cy.get("[data-cy='delete-campus']").click();
    cy.get('button').contains('Yes, delete it!').click();
  });

  it('can update admission proccess', () => {
    const numberofSteps = 3;

    cy.visit('/dashboard/general');
    cy.get("[data-cy='sidebar-institution']").click();
    cy.get("[data-cy='tab-admission']").click();
    cy.wait(2000);

    for (let i = 0; i < numberofSteps; i += 1) {
      cy.get('#new-item-input').type(`Step ${i + 1}`);
      cy.get("[data-cy='add-item-button']").click();
    }
    cy.get("[data-cy='drag-item']").should('have.length', numberofSteps);

    cy.get("[data-cy='update-admission-process']").click();
    cy.wait(500);

    cy.get("[data-cy='see-university-changes']").click();
    for (let i = 0; i < numberofSteps; i += 1) {
      cy.contains(`Step ${i + 1}`);
    }

    cy.go('back');
    cy.get("[data-cy='delete-item']").click({ multiple: true });
    cy.get("[data-cy='update-admission-process']").click();
  });

  it('can update social media', () => {
    const facebookTest = 'https://www.facebook.com';
    const linkedInTest = 'https://www.linkedin.com';
    const twitterTest = 'https://www.twitter.com';
    const instagramTest = 'https://www.instagram.com';

    cy.visit('/dashboard/general');
    cy.get("[data-cy='sidebar-institution']").click();
    cy.get("[data-cy='tab-social']").click();

    cy.get('#facebook').clear().type(facebookTest);
    cy.get('#linkedIn').clear().type(linkedInTest);
    cy.get('#twitter').clear().type(twitterTest);
    cy.get('#instagram').clear().type(instagramTest);
    cy.get("[data-cy='update-social-media']").click();

    cy.get("[data-cy='see-university-changes']").click();

    cy.get(`a[href="${facebookTest}"]`).should('be.visible');
    cy.get(`a[href="${linkedInTest}"]`).should('be.visible');
    cy.get(`a[href="${twitterTest}"]`).should('be.visible');
    cy.get(`a[href="${instagramTest}"]`).should('be.visible');
  });

  it('can create academic offer', () => {
    const filePathLogo = '../../src/assets/avatar-male.png';
    const descriptionTest = 'Description test 1';
    const offerTest = 'Offer name test 1';
    const durationTest = '10';
    const careerTest = 'Medicine';

    cy.visit('/dashboard/general');
    cy.wait(2000);
    cy.get("[data-cy='sidebar-institution']").click();
    cy.get("[data-cy='tab-offers']").click();
    cy.get("[data-cy='open-modal-button']").click();

    cy.get('#name').type(offerTest);
    cy.get('#description').type(descriptionTest);
    cy.get('#url').type('https://test.com');
    cy.get('#duration').type(durationTest).trigger('change');
    cy.get('#career').select(careerTest);
    cy.get('#profile-offer').attachFile(filePathLogo);
    cy.wait(500);
    cy.get("[data-cy='create-offer-button']").click();
    cy.wait(3000);

    cy.get("[data-cy='see-university-changes']").click();
    cy.contains(offerTest);
    cy.go('back');
  });

  it('can update an academic offer', () => {
    const filePathLogo = '../../src/assets/avatar-female.png';
    const descriptionTest = 'Description test 2';
    const offerTest = 'Offer name test 2';
    const durationTest = '8';
    const careerTest = 'Medicine';

    cy.get("[data-cy='tab-offers']").click();
    cy.get("[data-testid='accordion-title-element']:first").click();
    cy.get("[data-cy='update-offer-open']:first").click();

    cy.get('#name').clear().type(offerTest);
    cy.get('#description').clear().type(descriptionTest);
    cy.get('#url').clear().type('https://test.com');
    cy.get('#duration').clear().type(durationTest).trigger('change');
    cy.get('#career').select(careerTest);
    cy.get('#profile-offer').attachFile(filePathLogo);
    cy.wait(500);
    cy.get("[data-cy='update-offer-button']").click();
    cy.wait(3000);

    cy.get("[data-cy='see-university-changes']").click();
    cy.contains(offerTest);
    cy.go('back');
  });

  it('can delete an academic offer', () => {
    cy.get("[data-cy='tab-offers']").click();
    cy.get("[data-testid='accordion-title-element']:first").click();
    cy.get("[data-cy='delete-offer-open']:first").click();
    cy.get('button').contains('Yes, delete it!').click();
    cy.wait(1000);
    cy.get('button').contains('Ok').click();

    cy.get("[data-testid='accordion-title-element']").should('not.exist');
  });
});
