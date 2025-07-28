/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'


describe('Funcionalidade: Login', () => {
    
    var nome = faker.person.firstName()
    var email = faker.internet.email(nome)
    var sobrenome = faker.person.lastName()
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer cadastro com sucesso', () => {
        //cy.visit('minha-conta')
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.wait(2000)
        cy.get('.woocommerce-message').should('exist')

    })

    it.only('Deve completar o cadastro com sucesso - Usando comando customizado', () => {
        cy.preCadastro(faker.internet.email(), '@123', faker.person.firstName(), faker.person.lastName(),  )
        cy.get('.woocommerce-message').should('exist')
    });

})