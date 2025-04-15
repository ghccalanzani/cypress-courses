/// <reference types="Cypress" />

describe('CAC TAT', () => {
  it('Verifica o titulo da aplicacao', () => {

    cy.visit('./website/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})