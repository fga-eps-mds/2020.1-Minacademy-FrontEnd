const registerFemaleIntegration = () => describe('Female Register', () => {
  it('should not register wrong male register', () => {
    const name = 'Nova',
    lastname = 'Aluna',
    email = 'female@learner.com',
    password = '123456'

    cy.get('button').contains('Cadastrar').click();
    cy.wait(1000)
    cy.get('form').within(() => {
      cy.get('input[name="name"]').type(name).should('have.value', name)
      cy.get('input[name="lastname"]').type(lastname).should('have.value', lastname)
      cy.get('input[name="email"]').type(email).should('have.value', email)
      cy.wait(500)
      cy.get('select').select('Feminino')
      cy.wait(500)
      cy.get('input[name="password"]').type(password).should('have.value', password)
      cy.get('input[name="confirmPassword"]').type(password).should('have.value', password)
      cy.wait(500)
      cy.get('input[value="Mentor"]').first().check()
      cy.wait(500)
      cy.get('input[value="Learner"]').first().check()
      cy.get('input[name="mentor_request"]').check()
      cy.get('input[name="agree"]').check()
    })
    cy.intercept('POST', '/api/users', { 
      statusCode: 201,
      body: {
        user: {}
      }
    })
    cy.get('button[type="submit"]').contains('Cadastrar').click({force: true})
  })
})

export default registerFemaleIntegration