describe('Landing', () => {
  before(() => {
    cy.window().then((win) => {
        win.sessionStorage.clear()
    });
  });

  afterEach(() => {
    cy.wait(1000)
  })

  it('visits the app', () => {
    cy.visit('/')
  })

  it('go to Login page', () => {
    cy.get('button').contains('Entrar').click()
    cy.wait(1000)
  })

  it('go to Register page', () => {
    cy.get('button').contains('Cadastrar').click()
  })
})