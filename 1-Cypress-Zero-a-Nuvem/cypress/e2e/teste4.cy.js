/// <reference types="Cypress" />

describe('Exercicio 4', () => {
  beforeEach(() => {
    cy.visit('./website/index.html')
  })

  it('Marcar tipo de atendimento "Feedback" e verifica que foi marcado', () => {
    cy.get('input[type="radio"][value="feedback"]').check()
    cy.get('input[type="radio"][value="feedback"]').should('be.checked')
  })

  it('Marcar cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .each(tipoAtendimento => {
        cy.wrap(tipoAtendimento).check().should('be.checked')
      })
  })

})