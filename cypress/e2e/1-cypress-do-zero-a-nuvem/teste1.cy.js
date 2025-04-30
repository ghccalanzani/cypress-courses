/// <reference types="Cypress" />

describe('Exercício 1 - Valida título', () => {
  it('Verifica o titulo da aplicacao', () => {
    cy.visit('./website/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})