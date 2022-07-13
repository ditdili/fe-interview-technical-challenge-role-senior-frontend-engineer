/// <reference types="cypress" />

describe('happy path', () => {
  it('runs happy path successfully', () => {
    cy.visit('/');
    cy.getTestEl('table_link').should('be.visible');
    cy.getTestEl('you_go_link').should('be.visible');
    cy.getTestEl('policyholders_link').should('be.visible');

    /**
     * TODO: Challenge 10 - Update this test
     * - Click the Policyholders sidebar link
     * - Assert that a network request is made
     * - Assert that data from the network is displayed
     */

    cy.intercept({
      method: 'GET',
      url: 'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders',
    }).as('getPolicyholders');

    cy.get('[data-testid="policyholders_link"]').click();

    cy.wait('@getPolicyholders').then((xhr) => {
      expect(xhr.request.method).to.eq('GET');
    });

    cy.getTestEl('table_body_0').contains('Mrs. Holder').should('be.visible');
    cy.getTestEl('table_body_0')
      .contains('123 Lane Ave 3H, Santa Monica, CA 90405')
      .should('be.visible');
  });
});
