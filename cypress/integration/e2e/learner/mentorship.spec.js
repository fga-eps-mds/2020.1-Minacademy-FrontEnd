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

  it('not unassign mentor', () => {
    cy.get('.custom-card').within(() => {
      cy.get('button').contains('Desvincular').click()
    })

    cy.wait(1000)

    cy.get('.custom-modal').within(() => {
      cy.get('button').contains('cancelar').click()
    })
  })
})

export default MentorshipIntegration
