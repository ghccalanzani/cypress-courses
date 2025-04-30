/// <reference types="Cypress" />

describe('Exercicio 5 - Marcar checkbox', () => {
    beforeEach(() => {
        cy.visit('./website/index.html')
    })

    it('Marcar ambos checkbox e depois desmarcar o último', () => {
        cy.get('input[type="checkbox"]').check() //Como há mais de um checkbox, marcará ambos pois o get retorna os dois
        cy.get('input[type="checkbox"]').should('be.checked')

        cy.get('input[type="checkbox"]').last().uncheck()
        cy.get('input[type="checkbox"]').last().should('not.be.checked')
    })
})