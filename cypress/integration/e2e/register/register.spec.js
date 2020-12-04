import RegisterMale from './registerMale.spec';
import RegisterFemale from './registerFemale.spec';

describe('Register', () => {
  before(() => {
    cy.window().then((win) => {
        win.sessionStorage.clear()
    });
    cy.visit('/cadastro')
  });

  afterEach(() => {
    cy.wait(750)
  })

  RegisterMale();
  RegisterFemale();
})