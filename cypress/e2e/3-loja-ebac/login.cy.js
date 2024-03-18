/// <reference types = "cypress"/>

describe('Funcionalidade = login', () => {
    it('Deve fazer login com sucesso', () => {
        // Coloque o código do teste aqui
    });
});

describe('Funcionalidade = login', () => {
    it('Dever fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ivaneide.teste@teste.com.br')
        cy.get('#password').type('Te1234!?bc')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá, ivaneide.teste (não é ivaneide.teste? Sair')
        
    });
    
});