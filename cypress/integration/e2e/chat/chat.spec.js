const ChatIntegration = () => describe('Chat', () => {
  before(() => {
    cy.restoreSessionStorage();
  });

  it('open chat', () => {
    cy.get('.sc-launcher').click()
  })

  it('input message', () => {
    const message = 'Hello from cypress!'
    cy.get('.sc-user-input').as('form').click()
    cy.get('.sc-user-input--text').type(message).type('{enter}')

    cy.get('.sc-message--text').contains(message).first()
  })
})

export default ChatIntegration
