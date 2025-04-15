// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('preencherCamposObrigatorios', () => {
    cy.get('#firstName').type('Gustavo')
    cy.get('#lastName').type('Calanzani')
    cy.get('#email').type('gustavo.calanzani@autoglass.com.br')
    cy.get('#open-text-area').type('Abcde')
})