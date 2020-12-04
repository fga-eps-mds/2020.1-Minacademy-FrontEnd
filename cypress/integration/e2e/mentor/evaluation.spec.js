const AvaliationIntegration = () => describe('Mentor Evaluation', () => {
  // it('go to Evaluation page', () => {
  //   cy.get('.header').within(() => {
  //     cy.get('a[href*="avaliacao"]').click()
  //   })
  //   cy.wait(1000)
  //   cy.get('h1').contains('Avaliação')
  // })

  it('go to last question', () => {
    cy.get('button').contains('Iniciar').click()
    cy.wait(1000)
    cy.get('.activities-list__list').within(() => {
      cy.get('a').contains('10').first().click()
      cy.wait(1000)
    })
    cy.get('.question__description')
  })

  it('answer last question', () => {
    const staticResponse = {
      statusCode: 200,
      body: {
        question: "5f6cfbb6fc13ae3bc6000066",
        alternative: "b",
        isCorrect: 'hidden'
    }}

    cy.get('#question').within(() => {
      cy.get('input').check('b')
    })
    cy.wait(1000)
    cy.get('button[type="submit"]').contains('Responder').as('submitButton')
    cy.intercept('POST', '/api/answer', staticResponse)
    cy.get('@submitButton').click()
    cy.wait(500)
  })

  it('fail evaluation', () => {
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
    })
    cy.get('button').contains('Finalizar').click()
    cy.wait(500)
    cy.get('button').contains('sim').click()
    cy.get('.Toastify__toast--error').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('Você não atingiu o resultado mínimo para ser validado').click()
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

  it('answer last question', () => {
    const staticResponse = {
      statusCode: 200,
      body: {
        question: "5f6cfbb6fc13ae3bc6000066",
        alternative: "a",
        isCorrect: 'hidden'
    }}

    cy.get('#question').within(() => {
      cy.get('input').check('a')
    })
    cy.wait(1000)
    cy.get('button[type="submit"]').contains('Responder').as('submitButton')
    cy.intercept('POST', '/api/answer', staticResponse)
    cy.get('@submitButton').click()
    cy.wait(500)
  })

  it('successfully complete evaluation', () => {
    cy.intercept('PATCH', '/mentors/validation', {
      statusCode: 200,
      body: {
        user: {
          name: 'mentor',
          lastname: 'teste',
          email: 'user@mentor.com',
          userType: 'Mentor',
          attempts : 1,
          learners: [],
          isAvailable : false,
          isValidated : true,
        },
        result: [0,1,2,3,4,5,6],
        attempts: 1
      },
    })

    cy.get('button').contains('Finalizar').click()
    cy.wait(500)
    cy.get('button').contains('sim').click()

    cy.get('.Toastify__toast--success').as('toast')
    cy.wait(1500)
    cy.get('@toast').contains('É isso aí!').click()
  })
})

export default AvaliationIntegration
