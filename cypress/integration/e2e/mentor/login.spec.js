import LogoutIntegration from '../logout.spec';
import EvaluationIntegration from './evaluation.spec';
import UnvalidatedMentorshipIntegration from './unvalidatedMentorship.spec';
import MentorshipIntegration from "./mentorship.spec";
import ProfileIntegration from './profile.spec';

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
    const email = "user@mentor.com"
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

  UnvalidatedMentorshipIntegration()
  EvaluationIntegration()
  MentorshipIntegration()
  ProfileIntegration()
  LogoutIntegration()
})