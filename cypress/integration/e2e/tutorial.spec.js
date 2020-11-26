const TutorialIntegration = () => describe('Tutorial', () => {
  before(() => {
    cy.restoreSessionStorage();
  });

  afterEach(() => {
    cy.wait(750)
  })

  it('go to Tutorial page', () => {
    cy.get('.header').within(() => {
      cy.get('a[href*="tutorial"]').click()
    })
  })

  it('go to module', () => {
    cy.get('.dd-header').click()
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

  it('answer question', () => {
    cy.get('.question__buttons').get('button[type="submit"]').as('submitButton')
    cy.get('#question').within(() => {
      cy.get('input').check('a')
    })
    cy.get('@submitButton').should('not.be.disabled')
  })
})

export default TutorialIntegration
