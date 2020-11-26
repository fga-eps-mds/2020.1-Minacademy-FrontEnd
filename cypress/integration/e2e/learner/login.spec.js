import TutorialIntegration from './tutorial.spec'
import MentorshipIntegration from './mentorship.spec'

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

  it('input non-registered authentication credentials', () => {
    const email = "cypress@email.com"
    const password = 'password'
    cy.get('form').within(() => {
      cy.get('input[name="email"]').type(email).should('have.value', email)
      cy.get('input[name="password"]').type(password).should('have.value', password)
    })
  })

  it('fail to login non-registered user', () => {
    // const staticResponse = { statusCode: 400, body: { error: 'Invalid Email or Password' } }
    // cy.intercept('POST', '/api/users/login', (req) => {
    //   // req.reply((res) => {
    //   //   expect(res.body.error).to.include('Invalid Email or Password')
    //   // })
    //   req.reply(staticResponse)
    // })
    // cy.intercept('POST', '/api/users/login', staticResponse)

    cy.get('button[type=submit]').click()
    cy.get('.Toastify__toast--error').as('toast')
    cy.get('@toast').contains('Email ou senha incorretos')
    cy.wait(1000)
    cy.get('@toast').click()
  })

  it('input authentication credentials', () => {
    const email = "learner5@email.com"
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

  TutorialIntegration()
  MentorshipIntegration()
})