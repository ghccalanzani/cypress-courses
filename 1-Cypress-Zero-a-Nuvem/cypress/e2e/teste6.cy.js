/// <reference types="Cypress" />

describe('Exercicio 6', () => {
    beforeEach(() => {
        cy.visit('./website/index.html')
    })

    it('Seleciona um arquivo da pasta fixtures', () => {
        cy.get('#file-upload').selectFile('cypress/fixtures/logo.png').should(input => {
            expect(input[0].files[0].name).to.equal('logo.png')
        })        
    })

    it('Simular drag and drop', () => {
        cy.get('#file-upload').selectFile('cypress/fixtures/logo.png', {action: 'drag-drop'})
    })
})