/// <reference types="Cypress" />

describe('Exercício 2', () => {
  beforeEach(() => {
    cy.visit('./website/index.html')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const textoLongo = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)
    cy.get('#firstName').type('Gustavo')
    cy.get('#lastName').type('Calanzani')
    cy.get('#email').type('gustavo.calanzani@autoglass.com.br')
    cy.get('#open-text-area').type(textoLongo, { delay: 0 })
    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Gustavo')
    cy.get('#lastName').type('Calanzani')
    cy.get('#email').type('gustavo.calanzani@autoglass,com,br')
    cy.get('#open-text-area').type('Abcde')
    cy.get('.button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('valida campo telefone vazio ao inserir valor não numérico', () => {
    cy.get('#phone').type('ABCDE')
    cy.get('#phone').should('not.have.value') //ou .should('have.value', '')    
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Gustavo')
    cy.get('#lastName').type('Calanzani')
    cy.get('#email').type('gustavo.calanzani@autoglass.com.br')
    cy.get('#open-text-area').type('Abcde')
    cy.get('#phone-checkbox').check()
    cy.get('.button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa um campo', () => {
    cy.get('#firstName')
      .type('Gustavo')
      .should('have.value', 'Gustavo')
      .clear()
      .should('have.value', '')
  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    const dados = {
      nome: 'Gustavo',
      sobrenome: 'Calanzani',
      email: 'gustavo.calanzani@autoglass.com.br'
    }
    cy.preencherCamposObrigatorios(dados)
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
  })
})