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

Cypress.Commands.add('preencherCamposObrigatorios', (dados = {nome: 'Fulano', sobrenome: 'Silva', email: 'a@a.com'}) => {
    cy.get('#firstName').type(dados.nome)
    cy.get('#lastName').type(dados.sobrenome)
    cy.get('#email').type(dados.email)
    cy.get('#open-text-area').type('Abcde')
})