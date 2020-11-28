const AvaliationIntegration = () => describe('Avaliation', () => {
  before(() => {
    cy.restoreSessionStorage();
  });

  it('go to Avaliation page', () => {
    cy.get('.header').within(() => {
      cy.get('a[href*="avaliacao"]').click()
    })
    cy.wait(1000)
    cy.get('h1').contains('Avaliação')
  })

  it('go to question', () => {
    cy.get('button').contains('Iniciar').click()
    cy.wait(1000)
    cy.get('.activities-list__list').within(() => {
      cy.get('a').contains('10').first().click()
      cy.wait(1000)
    })
    cy.get('.question__description')
  })

  it('answer wrong avalation', () => {
    const staticResponse = {
      statusCode: 200,
      body: {
        question: "5f6cfbb6fc13ae3bc6000066",
        alternative: "b",
        isCorrect: false
    }}
    cy.get('#question').within(() => {
      cy.get('input').check('b')
    })

    cy.wait(1000)

    cy.intercept('POST', '/api/answer', staticResponse)
    cy.intercept('PATCH', '/mentors/validation', { 
      statusCode: 200,
      body: {
        user: {
          attempts : 1,
          isAvailable : false,
          isValidated : false,
        }, 
        result: [0,1,2,3,4,5],
        attempts: 1
      },
      // delayMs: 1000
    })
    cy.get('button').contains('Finalizar').click()
    cy.wait(1000)
    cy.get('button').contains('sim').click()

    cy.get('.Toastify__toast--error').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('Você não atingi').click()
  })

  it('go to question', () => {
    cy.get('button').contains('Iniciar').click()
    cy.wait(500)
    cy.get('.activities-list__list').within(() => {
      cy.get('a').contains('10').first().click()
      cy.wait(500)
    })
    cy.get('.question__description')
  })

  it('answer correct avaliation', () => {
    const staticResponse = {
      statusCode: 200,
      body: {
        question: "5f6cfbb6fc13ae3bc6000066",
        alternative: "c",
        isCorrect: true
    }}
    cy.get('#question').within(() => {
      cy.get('input').check('c')
    })

    cy.wait(500)

    cy.get('button').contains('Finalizar').click()
    cy.intercept('POST', '/api/answer', staticResponse)
    cy.intercept('PATCH', '/mentors/validation', { 
      statusCode: 200,
      body: {
        user: {
          name: 'mentor',
          attempts : 1,
          isAvailable : false,
          isValidated : true,
        }, 
        result: [0,1,2,3,4,5,6],
        attempts: 1
      },
      // delayMs: 1000
    })
    cy.wait(1000)
    cy.get('button').contains('sim').click()
    cy.wait(500)

    cy.get('.Toastify__toast').as('toast')
    cy.get('@toast').contains('É isso').click()
    cy.wait(2000)
  })
})

export default AvaliationIntegration
