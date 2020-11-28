const LogoutIntegration = () => describe('Logout', () => {
  it('open navbar dropdown', () => {
    cy.get('.header__navigation-action--resources').click()
    cy.wait(750)
    cy.get('.nav-dropdown__items > [href="/"]').click()
  })

  it('click on toast', () => {
    cy.get('.Toastify__toast--default').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('Volte logo!').click()
  })
})

export default LogoutIntegration
