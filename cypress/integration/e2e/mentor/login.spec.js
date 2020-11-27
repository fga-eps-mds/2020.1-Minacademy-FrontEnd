import LogoutIntegration from '../logout.spec';
import AvaliationIntegration from './avaliation.spec';

describe('Login', () => {
  before(() => {
    cy.window().then((win) => {
        win.sessionStorage.clear()
    });
    cy.visit('/login')
  });

  beforeEach(() => {
    // cy.intercept('GET', '/api/progress', { statusCode: 400, body: { error: 'ERROR PROGRESS!' }})
  });

  afterEach(() => {
    cy.wait(750)
  })

  it('cypress is working', () => {
    expect(true).to.equal(true)
  })

  it('input authentication credentials', () => {
    const email = "user@mentor.com"
    const password = '123456'
    cy.get('form').within(() => {
      cy.get('input[name="email"]').clear().type(email).should('have.value', email)
      cy.get('input[name="password"]').clear().type(password).should('have.value', password)
    })
    cy.get('button[type=submit]').click()
    cy.get('.Toastify__toast--success').as('toast')
    cy.get('@toast').contains('Seja bem-vind')
    cy.wait(200)
    cy.get('@toast').click()
    cy.saveSessionStorage();
  })

  AvaliationIntegration()
  LogoutIntegration()
})