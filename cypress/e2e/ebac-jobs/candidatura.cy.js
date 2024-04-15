/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app') 
    })

    it('Deve levar o usuario ate o formulario de inscricao', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7) 
        cy.screenshot ('tela-inscricao')
    })

    it('Deve preencher o formulario de inscricao', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Jeymison Cardoso Silva Amaral')
        cy.get('input[name="email"]').type('jeymison.cardoso@hotmail.com')
        cy.get('input[name="telefone"]').type('11 9999-9999')
        cy.get('input[name="endereco"]').type('Rua Alexandra Morais Campo')
        cy.get('select[name="escolaridade"]').select('pos-graduado') 
        cy.get('#mac').check() 
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        }) 
        
        cy.screenshot ('tela-inscricao-preenchido')
    }) 
})  