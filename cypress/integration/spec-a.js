describe('CSS-Tricks home page', function() {
    beforeEach({ browser: 'chrome' }, function() {
        cy.visit('https://css-tricks.com/');
    });

    it('contains "CSS-Tricks" in the title', { browser: 'chrome' }, function () {
        cy.title().should('contain', 'CSS-Tricks');
    });

    it('contains  "CSS-Tricks" in the title', { browser: 'chrome' }, function() {
        cy.get('.icon-logo-star').should('be.visible');
    });
});

describe('with a 320x568 viewport', function() {
    beforeEach(function() {
        cy.viewport(320, 568);
    });

    it('has a visible mobile menu toggle', function() {
        cy.get('#mobile-menu-toggle').should('not.be.visible');
    });
});

describe('with a 1100x660 viewport', function() {
    beforeEach(function() {
        cy.viewport(1100, 660);
    });

    it('has a visible mobile menu toggle', function() {
        cy.get('#mobile-menu-toggle').should('be.visible');
    });
});


describe('with a 1085 viewport', function() {
    beforeEach(function() {
        cy.viewport(1085, 660);
    });

    it('has a visible mobile menu toggle', function() {
        cy.get('#mobile-menu-toggle').should('be.visible');
    });
})