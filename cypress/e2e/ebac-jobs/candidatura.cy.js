/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app') // entra no site
    })

    it('Deve levar o usuario ate o formulario de inscricao', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7) // verifica quantos inputs tem na tela
    })

    it('Deve preencher o formulario de inscricao', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Jeymison Cardoso Silva Amaral')
        cy.get('input[name="email"]').type('jeymison.cardoso@hotmail.com')
        cy.get('input[name="telefone"]').type('11 9999-9999')
        cy.get('input[name="endereco"]').type('Rua Alexandra Morais Campo')
        cy.get('select[name="escolaridade"]').select('pos-graduado') // escolher a escolaridade
        cy.get('#mac').check() // para escolher o servidor
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        }) // cria confirmacao de mensagem
    }) 
})  