import RegisterMale from './registerMale.spec';
describe('Register', () => {
  before(() => {
    cy.window().then((win) => {
        win.sessionStorage.clear()
    });
    cy.visit('/cadastro')
  });

  beforeEach(() => {
    // cy.intercept('GET', '/api/progress', { statusCode: 400, body: { error: 'ERROR PROGRESS!' }})
  });

  afterEach(() => {
    cy.wait(750)
  })

  it('cypress is working', () => {
    expect(true).to.equal(true)
  })

  RegisterMale();
})