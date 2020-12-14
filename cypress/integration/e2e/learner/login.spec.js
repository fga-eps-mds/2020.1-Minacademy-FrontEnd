import TutorialIntegration from './tutorial.spec';
import MentorshipIntegration from './mentorship.spec';
import LogoutIntegration from '../logout.spec';
import CertificateIntegration from './certificates.spec';

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

  it('cypress is working', () => {
    expect(true).to.equal(true)
  })

  it('input non-registered authentication credentials', () => {
    const email = "cypress@email.com"
    const password = 'password'
    cy.get('form').within(() => {
      cy.get('input[name="email"]').type(email).should('have.value', email)
      cy.get('input[name="password"]').type(password).should('have.value', password)
    })
  })

  it('fail to login non-registered user', () => {
    cy.get('button[type=submit]').click()
    cy.get('.Toastify__toast--error').as('toast')
    cy.get('@toast').contains('Email ou senha incorretos')
    cy.wait(1000)
    cy.get('@toast').click()
  })

  it('input authentication credentials', () => {
    const email = "user@email.com"
    const password = '123456'
    cy.get('form').within(() => {
      cy.get('input[name="email"]').clear().type(email).should('have.value', email)
      cy.get('input[name="password"]').clear().type(password).should('have.value', password)
    })
    cy.get('button[type=submit]').click()
    cy.get('.Toastify__toast--success').as('toast')
    cy.get('@toast').contains('Seja bem-vind')
    cy.wait(1000)
    cy.get('@toast').click()
    cy.saveSessionStorage();
  })

  TutorialIntegration()
  MentorshipIntegration()
  CertificateIntegration()
  LogoutIntegration()
})