/// <reference types="Cypress" />

describe('Exercicio 9 - Lodash, Invoke e Request', () => {
    beforeEach(() => {
        cy.visit('./website/index.html')
    })

    Cypress._.times(3, () => {
        it('Repetir teste n vezes', () => {
            cy.get('#firstName').type('Gustavo', { delay: 0 })
            cy.get('#lastName').type('Calanzani', { delay: 0 })
            cy.get('#email').type('gustavo.calanzani@autoglass.com.br', { delay: 0 })
            cy.get('#open-text-area').type('Abcde', { delay: 0 })
            cy.get('.button[type="submit"]').click()
          })
    })

    it('exibe e oculta as mensagens de sucesso usando invoke()', () => {
        cy.get('.success').should('not.be.visible')
        cy.get('.success').invoke('show')
        cy.get('.success').should('be.visible')
        cy.get('.success').invoke('hide')
        cy.get('.success').should('not.be.visible')
    })

    it('preenche o campo da área de texto usando o comando invoke', () => {
        cy.get('#open-text-area')
        .invoke('val', '123')
        .should('have.value', '123')
    })

    it('faz uma requisição HTTP', () => {
        cy.request('https://reqres.in/api/users/2')
        .as('getRequest')
        .its('status')
        .should('equal', 200)
    })

    it('Exibir gato', () => {
        cy.get('#cat')
          .invoke('show')
          .should('be.visible')
        cy.get('#title')
          .invoke('text', '🐈 GATO')
    })

  })