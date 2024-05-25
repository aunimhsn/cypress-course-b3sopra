/// <reference types="cypress" />

describe('first test', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html')
    })

    it('contains Hello World!', () => {
        cy.get('p').should('have.text', 'Hello World!')
    })
})
