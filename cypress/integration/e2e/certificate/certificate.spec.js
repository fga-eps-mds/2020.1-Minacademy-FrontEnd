describe('Certificate', () => {
  before(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });

  afterEach(() => {
    cy.wait(1000);
  });

  it('visits the certificate', () => {
    cy.intercept('/api/certificates').as('getCertificate');
    cy.visit('/certificado/5fc07ddb1c18fa00154e0130').wait('@getCertificate');
    // cy.wait('@getCertificate');
    cy.get('text').contains('Certificado de');
  });
});
