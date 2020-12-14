const MentorshipIntegration = () => describe('Validated Mentorship', () => {
  it('go to Mentorship page', () => {
    cy.get('.header').within(() => {
      cy.get('a[href*="mentoria"]').click()
    })
    cy.wait(1000)
    cy.get('h1').contains('Mentoria')
  })

  it('request a learner', () => {
    const staticAvailabilityResponse = {
      statusCode: 200,
      body: true
    }

    const staticResponse = {
      statusCode: 200,
      body: {
        learner: {
          name: 'test',
          lastname: 'learner',
          email: 'learner00@email.com',
          completedModules: []
        },
        isAvailable: false
      }
    }

    cy.get('.mentor__content').within(() => {
      cy.get('h3').contains('Você não possui nenhuma aprendiz')
    })

    cy.intercept('PATCH', '/api/mentors/availability', staticAvailabilityResponse)
    cy.intercept('PATCH', '/api/mentors', staticResponse)
    cy.get('button').contains('Aceitar novos aprendizes').click()

    cy.get('.Toastify__toast--success').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('nova aprendiz!').click()
  })

  it('unassign learner', () => {
    cy.get('.custom-card').within(() => {
      cy.get('button').contains('Desvincular').first().click()
    })

    cy.wait(1000)

    cy.get('.custom-modal').within(() => {
      cy.intercept('DELETE', '/api/mentors', {
        statusCode: 200,
        body: []
      })
      cy.get('button').contains('desvincular').click()
    })
    cy.get('.Toastify__toast--success').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('Aprendiz desvinculada com sucesso').click()
  })

  it('fail to request learner', () => {
    const staticAvailabilityResponse = {
      statusCode: 200,
      body: true
    }

    const staticResponse = {
      statusCode: 400,
      body: {
        isAvailable: true
      }
    }

    cy.intercept('PATCH', '/api/mentors/availability', staticAvailabilityResponse)
    cy.intercept('PATCH', '/api/mentors', staticResponse)
    cy.get('button').contains('Aceitar novos aprendizes').click()

    cy.get('.Toastify__toast--dark').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('Nenhuma aprendiz disponível no momento').click()
  })
})
export default MentorshipIntegration
