const LogoutIntegration = () => describe('Logout', () => {
  it('open navbar dropdown', () => {
    cy.get('.header__navigation-action--resources').click()
    cy.wait(750)
    cy.get('.nav-dropdown__items > [href="/"]').click()
  })
})

export default LogoutIntegration
