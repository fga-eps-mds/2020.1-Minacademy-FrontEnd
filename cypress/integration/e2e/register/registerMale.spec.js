const registerMaleIntegration = () => describe('Male Register', () => {
  it('should not register wrong male register', () => {
    const name = '1Novo',
    lastname = '1Aluno',
    email = 'male@learner',
    password = '12345'

    cy.get('form').within(() => {
      cy.get('input[name="name"]').type(name).should('have.value', name)
      cy.get('input[name="lastname"]').type(lastname).should('have.value', lastname)
      cy.get('input[name="email"]').type(email).should('have.value', email)
      cy.wait(500)
      cy.get('select').select('Masculino')
      cy.wait(500)
      cy.get('input[name="password"]').type(password).should('have.value', password)
      cy.get('input[name="confirmPassword"]').type(password).should('have.value', password)
      cy.wait(500)
      cy.get('input[value="Learner"]').first().check({force:true})
      cy.get('label[for="userType"]').contains('Somente')
      cy.wait(500)
      cy.get('input[value="Mentor"]').first().check()
      cy.get('input[name="agree"]').check()
    })
    cy.get('button[type="submit"]').contains('Cadastrar').click({force: true})
  })

  it('should register user', () => {
    const name = 'Novo',
    lastname = 'Mentor',
    email = 'male@mentor.com',
    password = '123456'

    cy.get('form').within(() => {
      cy.get('input[name="name"]').clear().type(name).should('have.value', name)
      cy.get('input[name="lastname"]').clear().type(lastname).should('have.value', lastname)
      cy.get('input[name="email"]').clear().type(email).should('have.value', email)
      cy.wait(500)
      cy.get('input[name="password"]').clear().type(password).should('have.value', password)
      cy.get('input[name="confirmPassword"]').clear().type(password).should('have.value', password)
      cy.wait(1000)
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

export default registerMaleIntegration