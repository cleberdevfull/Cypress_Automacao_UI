/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

//import { faker } from '@faker-js/faker'


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl('')

});
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')

        });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        cy.get('.product_title').should('contain' , produto)
        });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('abominable hoodie')
        cy.get('.product_title').should('contain' , 'Abominable Hoodie')
        });    
    
    it.only('Deve adicionar produto ao carrinho', () => {
        let quantidade = 4
        produtosPage.buscarProduto('abominable hoodie')
        produtosPage.addProdutoCarrinho('L', 'Blue', quantidade )
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
        // cy.get('.product_title').should('contain' , '“Abominable Hoodie” foi adicionado no seu carrinho.')
        });    
})
