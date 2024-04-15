/// <reference types="cypress" />

describe('Testes para home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app') // entra no site
    })

    it('Deve renderizar 4 vagas', () => {
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })
    
    it('Deve filtar por fullstack', () => {
        cy.get('.FormVagas_campo__E1ppF').type('fullstack') // procura o que deseja e filtra
        cy.get('button[type="submit"]').click() // clica no botao para filtrar
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1) // confirma que so tem um item da procura
    })
})  

// Utilizamos o > no get para retornar os filhos diretos 
// cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}') Aqui digita e da enter no mesmo campo
// cy.get('button[type="submit"]').click() aqui clica no botao para filtrar 