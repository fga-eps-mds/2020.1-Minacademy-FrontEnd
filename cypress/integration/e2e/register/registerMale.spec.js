const registerMaleIntegration = () =>
  describe('Male Register', () => {
    it('input invalid user info', () => {
      const userInfo = {
        name: '1 invalid 1',
        lastname: '1 name 1',
        email: 'email@invalid',
        password: '123',
      };

      cy.get('form').within(() => {
        cy.get('input[name="name"]')
          .type(userInfo.name)
          .should('have.value', userInfo.name);
        cy.get('input[name="lastname"]')
          .type(userInfo.lastname)
          .should('have.value', userInfo.lastname);
        cy.get('input[name="email"]')
          .type(userInfo.email)
          .should('have.value', userInfo.email);
        cy.wait(250);
        cy.get('select').select('Masculino');
        cy.wait(250)
        cy.get('input[name="password"]')
          .type(userInfo.password)
          .should('have.value', userInfo.password);
        cy.get('input[name="confirmPassword"]')
          .type(userInfo.password)
          .should('have.value', userInfo.password);
        cy.get('input[value="Learner"]').first().check({ force: true });
        cy.get('label[for="userType"]').contains('Somente usuárias');
        cy.get('input[value="Mentor"]').first().check();
        cy.wait(100)
        cy.get('input[name="agree"]').check();
        cy.wait(100)
      });
      cy.get('button[type="submit"]').contains('Cadastrar').click();
    });

    it('input valid male mentor user info', () => {
      const userInfo = {
        name: 'Pessoa',
        lastname: 'de Teste',
        email: 'teste@email.com',
        password: '123456',
      };

      cy.get('form').within(() => {
        cy.get('input[name="name"]')
          .clear()
          .type(userInfo.name)
          .should('have.value', userInfo.name);

        cy.get('input[name="lastname"]')
          .clear()
          .type(userInfo.lastname)
          .should('have.value', userInfo.lastname);

        cy.get('input[name="email"]')
          .clear()
          .type(userInfo.email)
          .should('have.value', userInfo.email);

        cy.get('input[name="password"]')
          .clear()
          .type(userInfo.password)
          .should('have.value', userInfo.password);

        cy.get('input[name="confirmPassword"]')
          .clear()
          .type(userInfo.password)
          .should('have.value', userInfo.password);

        cy.wait(500);
      });

      cy.intercept('POST', '/api/users', {
        statusCode: 201,
        body: {
          user: {},
        },
      });

      cy.get('button[type="submit"]')
        .contains('Cadastrar')
        .click();
    });

    it('click on toast', () => {
      cy.get('.Toastify__toast--success').as('toast')
      cy.wait(1000)
      cy.get('@toast').contains('Enviamos um e-mail de confirmação').click()
    })
  });

export default registerMaleIntegration;
