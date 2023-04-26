// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("login_out", (login, password) => {
  cy.get("#user_email").type(login);
  cy.get("#user_password").type(password);
  cy.get(".css-1jphuq5").click().should("have.text", "Log in");
  cy.get(".css-7afvtf").click();
  cy.get(".css-bve2vl.e1phyiqy2")
    .contains("Log out")
    .click()
    .should("have.text", "Log out");
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
