const TutorialIntegration = () => describe('Tutorial', () => {
  before(() => {
    cy.restoreSessionStorage();
  });

  it('go to Tutorial page', () => {
    cy.get('.header').within(() => {
      cy.get('a[href*="tutorial"]').click()
    })
    cy.wait(500)
    cy.get('h1').contains('Tutorial')
  })

  it('go to module', () => {
    cy.get('.dd-header').click()
    cy.wait(1000)
    cy.get('.dd-list').within(() => {
      cy.get(':nth-child(2) > button').click()
    })
    cy.get('.activities-list__header > div > h3').contains('Módulo 2')
  })

  it('go to question', () => {
    cy.get('.activities-list__list').within(() => {
      cy.get('a').contains('Atividade').first().click()
      cy.wait(500)
    })
    cy.get('.question__description')
  })

  it('incorrectly answer question', () => {
    const staticResponse = {
      statusCode: 200,
      body: {
        question: "5f6cfbb6fc13ae3bc6000066",
        alternative: "d",
        isCorrect: false
    }}

    cy.get('.question__buttons').get('button[type="submit"]').as('submitButton')
    cy.get('#question').within(() => {
      cy.get('input').check('d')
    })
    cy.get('@submitButton').should('not.be.disabled')

    cy.intercept('POST', '/api/answer', staticResponse)
    cy.get('@submitButton').click()
    cy.wait(500)
  })

  it('correctly answer question', () => {
    const staticResponse = {
      statusCode: 200,
      body: {
        question: "5f6cfbb6fc13ae3bc6000066",
        alternative: "b",
        isCorrect: true
    }}

    cy.get('.question__buttons').get('button[type="submit"]').as('submitButton')
    cy.get('#question').within(() => {
      cy.get('input').check('b')
    })
    cy.get('@submitButton').should('not.be.disabled')

    cy.wait(500)

    cy.intercept('POST', '/api/answer', staticResponse)
    cy.intercept('GET', '/api/progress', { statusCode: 400, body: { error: 'ERROR PROGRESS!' }})
    cy.get('@submitButton').click()
    cy.wait(500)
    cy.get('.question__result').contains('h2', 'CORRETO!')
  })
})

export default TutorialIntegration
