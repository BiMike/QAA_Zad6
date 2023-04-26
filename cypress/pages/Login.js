class LoginPage {
  getInputLogin() {
    return cy.get("#user_email");
  }

  getInputPassword() {
    return cy.get("#user_password");
  }

  getSignIn() {
    return cy.get(".css-1jphuq5");
  }
}

export default LoginPage;
