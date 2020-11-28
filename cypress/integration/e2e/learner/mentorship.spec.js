const MentorshipIntegration = () => describe('Mentorship', () => {
  before(() => {
    cy.restoreSessionStorage();
  });

  it('go to Mentorship page', () => {
    cy.get('.header').within(() => {
      cy.get('a[href*="mentoria"]').click()
    })
    cy.wait(1000)
    cy.get('h1').contains('Mentoria')
  })

  it('cancel mentor request', () => {
    cy.get('button').contains('Cancelar').click()
    cy.get('.Toastify__toast--success').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('Solicitação').click()
  })

  it('request mentor', () => {
    cy.intercept('PATCH', '/api/learners', {
      statusCode: 200,
      body: {
        mentorRequest: false,
        mentor: {
          name: 'Alberto',
          lastname: 'Pereira',
          email: 'alberto@mail.com'
        },
      }
    })
    cy.get('button').contains('Solicitar').click()
    cy.get('.Toastify__toast--success').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('Alberto').click()
  })

  it('not unassign mentor', () => {
    cy.get('.custom-card').within(() => {
      cy.get('button').contains('Desvincular').click()
    })

    cy.wait(1000)

    cy.get('.custom-modal').within(() => {
      cy.get('button').contains('cancelar').click()
    })
  })

  it('unassign mentor', () => {
    cy.get('.custom-card').within(() => {
      cy.get('button').contains('Desvincular').click()
    })

    cy.wait(1000)

    cy.get('.custom-modal').within(() => {
      cy.intercept('DELETE', '/api/learners', {
        statusCode: 200,
        body: {
          mentor: null,
        }
      })
      cy.get('button').contains('desvincular').click()
    })
    cy.get('.Toastify__toast--success').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('Mentoria').click()
  })

  it('request new mentor', () => {
    cy.get('button').contains('Solicitar').click()
    cy.get('.Toastify__toast--error').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('Infelizmente').click()
  })
})
export default MentorshipIntegration
