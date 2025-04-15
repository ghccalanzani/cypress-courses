/// <reference types="Cypress" />

describe('Exercicio 3', () => {
  beforeEach(() => {
    cy.visit('./website/index.html')
  })

  it('selecionar um produto pelo texto', () => {
    cy.get('#product').select('YouTube')
    cy.get('#product').should('have.value', 'youtube')
  })

  it('selecionar um produto pelo valor', () => {
    cy.get('#product').select('mentoria')
    cy.get('#product').should('have.value', 'mentoria')
  })

  it('selecionar um produto pelo índice', () => {
    cy.get('#product').select(1)
    cy.get('#product').should('have.value', 'blog')
  })
})