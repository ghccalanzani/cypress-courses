/// <reference types="Cypress" />

describe('Exercicio 8', () => {
    beforeEach(() => {
        cy.visit('./website/index.html')
    })
  
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.clock()

        cy.get('#firstName').type('Gustavo')
        cy.get('#lastName').type('Calanzani')
        cy.get('#email').type('gustavo.calanzani@autoglass,com,br')
        cy.get('#open-text-area').type('Abcde')
        cy.get('.button[type="submit"]').click()
    
        cy.get('.error').should('be.visible')

        cy.tick(3000)

        cy.get('.error').should('not.be.visible')
      })
  
  })