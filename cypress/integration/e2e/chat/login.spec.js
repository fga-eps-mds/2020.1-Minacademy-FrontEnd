import ChatIntegration from './chat.spec';

describe('Login', () => {
  before(() => {
    cy.window().then((win) => {
        win.sessionStorage.clear()
    });
    cy.visit('/login')
  });

  afterEach(() => {
    cy.wait(750)
  })

  it('input authentication credentials', () => {
    const email = "chat@mentor.com"
    const password = '123456'
    cy.get('form').within(() => {
      cy.get('input[name="email"]').clear().type(email).should('have.value', email)
      cy.get('input[name="password"]').clear().type(password).should('have.value', password)
    })
    cy.get('button[type=submit]').click()
    cy.get('.Toastify__toast--success').as('toast')
    cy.get('@toast').contains('Seja bem-vind')
    cy.wait(750)
    cy.get('@toast').click()
    cy.saveSessionStorage();
  })

  ChatIntegration()
})