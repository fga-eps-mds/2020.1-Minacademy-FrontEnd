const registerFemaleIntegration = () => describe('Female Register', () => {
  it('input valid female mentor info', () => {
    const name = 'Nova',
    lastname = 'Aluna',
    email = 'female@learner.com',
    password = '123456'

    cy.get('button').contains('Cadastrar').click();
    cy.wait(1000)
    cy.get('form').within(() => {
      cy.get('input[name="name"]').type(name).should('have.value', name)
      cy.get('input[name="lastname"]').type(lastname).should('have.value', lastname)
      cy.wait(250)
      cy.get('input[name="email"]').type(email).should('have.value', email)
      cy.get('select').select('Feminino')
      cy.wait(250)
      cy.get('input[name="password"]').type(password).should('have.value', password)
      cy.get('input[name="confirmPassword"]').type(password).should('have.value', password)
      cy.get('input[value="Mentor"]').first().check()
      cy.wait(250)
      cy.get('input[value="Learner"]').first().check()
      cy.wait(250)
      cy.get('input[name="mentor_request"]').check()
      cy.get('input[name="agree"]').check()
    })
    cy.intercept('POST', '/api/users', {
      statusCode: 201,
      body: {
        user: {}
      }
    })
    cy.get('button[type="submit"]').contains('Cadastrar').click()
  })

  it('click on toast', () => {
    cy.get('.Toastify__toast--success').as('toast')
    cy.wait(1000)
    cy.get('@toast').contains('Enviamos um e-mail de confirmação').click()
  })
})

export default registerFemaleIntegration