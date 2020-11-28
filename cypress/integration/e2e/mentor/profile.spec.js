const ProfileIntegration = () => describe('Profile', () => {
  it('open navbar dropdown', () => {
    cy.get('.header__navigation-action--resources').click()
    cy.wait(750)
    cy.get('.nav-dropdown__items > [href="/perfil"]').click()
  })
  it('edit lastname', () => {
    const lastname = 'Now Validated',
    email = 'user@mentor.com'
    cy.get('input[name="lastname"]').type(lastname).should('have.value', lastname);
    cy.get('input[name="email"]').type(email).should('have.value', email);
    cy.wait(750)
    cy.intercept('POST', 'api/editUser', {
      body: {
        user: {
          name: 'mentor',
          lastname,
          email
        },
        emailChange: false
      }
    })
    cy.get('button').contains('ATUALIZAR').click()
    cy.wait(3000)
  })
})

export default ProfileIntegration
