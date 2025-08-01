/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario , login.senha)

        })
   
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('UserTeste', 'Testando', '__tst01')
        cy.get('.woocommerce-MyAccount-content').should('contain' , 'Detalhes da conta modificados com sucesso.')
     
    });

});