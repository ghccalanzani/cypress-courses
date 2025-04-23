/// <reference types="Cypress" />

describe('Exercicio 7', () => {
  beforeEach(() => {
      cy.visit('./website/index.html')
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
    .should('have.attr', 'href', 'privacy.html')
    .and('have.attr', 'target', '_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('Não salvamos dados submetidos no formulário da aplicação CAC TAT.').should('be.visible')
  })

  it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./website/privacy.html')
    cy.contains('p', 'Talking About Testing').should('be.visible')
  })

})