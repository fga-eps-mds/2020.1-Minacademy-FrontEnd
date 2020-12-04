const MentorshipIntegration = () => describe('Non-validated Mentorship', () => {
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

  it('go to Evaluation page', () => {
    cy.get('.mentor').within(() => {
      cy.get('a[href*="avaliacao"]').click()
    })
    cy.wait(1000)
    cy.get('h1').contains('Avaliação')
  })
})
export default MentorshipIntegration
